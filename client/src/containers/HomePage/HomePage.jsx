import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from '../../hooks/useDebounce';
import { addToHistory } from '../../store/slice/history';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import SearchResultsPage from '../../components/SearchResultsPage';
import CharactersPage from '../CharactersPage';
import Banner from '../../components/UI/Banner';
import UiInput from '../../components/UI/UiInput';
import { SEARCH } from '../../constants/apiConstants';
import { useLazySearchCharacterQuery } from '../../store/api/searchApi';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue);
  const historyValue = searchParams.get('characterName');
  const isAuthorised = useAuth();
  const [fetchCharacters, { data }] = useLazySearchCharacterQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (historyValue) {
      setSearchValue(historyValue);
    }
    if (debouncedSearchValue.length >= 1) {
      setSearchValue(debouncedSearchValue);
      fetchCharacters(debouncedSearchValue);

      if (isAuthorised) {
        const searchData = {
          value: debouncedSearchValue,
        };
        dispatch(addToHistory(searchData));
      }
    }
  }, [debouncedSearchValue]);

  const handleInputChange = (value) => {
    if (!value) {
      setSearchParams(searchParams.delete(SEARCH));
    }
    if (value) {
      setSearchParams({ characterName: value });
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
      <Banner />
      <UiInput
        value={searchValue}
        handleInputChange={handleInputChange}
        placeholder='Find hero...'
        handleInputClear={handleInputClear}
      />
      {searchValue ? <SearchResultsPage characters={data} /> : <CharactersPage />}
    </div>
  );
};

export default HomePage;
