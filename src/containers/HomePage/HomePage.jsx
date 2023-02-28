import { debounce } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getApiResource } from '../../utils/network';
import { CHARACTERS, SEARCH, SEARCH_PARAMS } from '../../constants/apiConstants';
import SearchResultsPage from '../../components/SearchResultsPage';
import CharactersPage from '../CharactersPage';
import UiInput from '../../components/UI/UiInput';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('characterName') || '');
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
    debounce((value) => {
      findCharacter(value);
    }, 300),
    [],
  );

  const handleInputChange = (value) => {
    if (!value) {
      setSearchParams(searchParams.delete(SEARCH));
    }
    if (value) {
      debouncedFindCharacter(value);
      setSearchParams({ charcterName: value });
    }
    setSearchValue(value);
  };

  const handleInputClear = (value) => {
    if (value) {
      handleInputChange('');
    }
  };

  // useEffect(() => {
  //   const historyValue = searchParams.get('characterName');
  //   if (historyValue) {
  //     handleInputChange(historyValue);
  //   }
  // }, []);

  return (
    <div>
      <UiInput
        value={searchValue}
        handleInputChange={handleInputChange}
        placeholder='Find hero...'
        handleInputClear={handleInputClear}
      />
      {searchValue ? <SearchResultsPage errorApi={errorApi} characters={characters} /> : <CharactersPage />}
    </div>
  );
};

export default HomePage;
