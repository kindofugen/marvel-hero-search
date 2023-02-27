import { debounce } from 'lodash';
import { useState, useCallback } from 'react';
import { getApiResource } from '../../utils/network';
import { CHARACTERS, SEARCH_PARAMS } from '../../constants/apiConstants';
import CharactersList from '../../components/CharactersPage/CharactersList';
import ErrorMessage from '../../components/ErrorMessage';
import CharactersPage from '../CharactersPage';
import UiInput from '../../components/UI/UiInput';
import s from './HomePage.module.css';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [characters, setCharacters] = useState([]);
  const [errorApi, setErrorApi] = useState(false);

  const findCharacter = async (param) => {
    const response = await getApiResource(`${CHARACTERS}`, SEARCH_PARAMS + param);
    if (response) {
      const result = response.data.results;
      const charactersList = result.map(({ id, name, thumbnail }) => {
        return {
          id,
          name,
          thumbnail,
        };
      });
      setCharacters(charactersList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  const debouncedFindCharacter = useCallback(
    debounce((value) => findCharacter(value), 300),
    [],
  );

  const handleInputChange = (value) => {
    if (value) {
      debouncedFindCharacter(value);
    }
    setSearchValue(value);
  };

  const handleInputClear = (value) => {
    if (value) {
      handleInputChange('');
    }
  };

  return (
    <div>
      <UiInput
        value={searchValue}
        handleInputChange={handleInputChange}
        placeholder='Find hero...'
        handleInputClear={handleInputClear}
      />
      {errorApi ? (
        <ErrorMessage />
      ) : searchValue ? (
        characters.length ? (
          <CharactersList characters={characters} />
        ) : (
          <div className={s.fail__wrapper}>
            <span className={s.fail__message}>No results</span>
          </div>
        )
      ) : (
        <CharactersPage />
      )}
    </div>
  );
};

export default HomePage;
