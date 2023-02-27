import { debounce } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
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

  const getResponse = async (param) => {
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

  useEffect(() => {
    getResponse('');
  }, []);

  const debouncedGetResponse = useCallback(
    debounce((value) => getResponse(value), 300),
    [],
  );

  const handleInputChange = (value) => {
    if (value) {
      debouncedGetResponse(value);
    }
    setSearchValue(value);
  };

  return (
    <div>
      <UiInput value={searchValue} handleInputChange={handleInputChange} placeholder='Find hero...' />
      {errorApi ? <ErrorMessage /> : searchValue ? <CharactersList characters={characters} /> : <CharactersPage />}
    </div>
  );
};

export default HomePage;
