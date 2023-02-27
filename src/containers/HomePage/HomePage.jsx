import { debounce } from 'lodash';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getApiResource } from '../../utils/network';
import { CHARACTERS, SEARCH, SEARCH_PARAMS } from '../../constants/apiConstants';
import SearchResultsPage from '../../components/SearchResultsPage';
import CharactersPage from '../CharactersPage';
import UiInput from '../../components/UI/UiInput';

const HomePage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [characters, setCharacters] = useState([]);
  const [errorApi, setErrorApi] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    if (!value) {
      navigate('/');
    }
    if (value) {
      debouncedFindCharacter(value);
      navigate(SEARCH + SEARCH_PARAMS + value, { replace: true });
    }
    setSearchValue(value);
  };

  const handleInputClear = (value) => {
    if (value) {
      handleInputChange('');
      navigate('/');
    }
  };

  useEffect(() => {
    if (location.pathname.startsWith(SEARCH)) {
      const paramFromHistory = location.pathname.replace(SEARCH + SEARCH_PARAMS, '');
      handleInputChange(paramFromHistory);
    }
  }, []);

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
