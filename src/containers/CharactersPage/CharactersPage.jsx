import { useState, useEffect } from 'react';
import { getApiResource } from '../../utils/network';
import CharactersList from '../../components/CharactersPage/CharactersList';
import ErrorMessage from '../../components/ErrorMessage';
import CharactersNavigation from '../../components/CharactersPage/CharactersNavigation';
import { CHARACTERS, OFFSET_PARAMS } from '../../constants/apiConstants';

const CharactersPage = () => {
  const [characters, setCharacters] = useState(null);
  const [errorApi, setErrorApi] = useState(false);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');

  const getResource = async (resource, queryData) => {
    const response = await getApiResource(resource, queryData);

    if (response) {
      const resData = response.data;
      console.log(resData);
      const charactersList = resData.results.map(({ id, name, thumbnail }) => {
        return {
          id,
          name,
          thumbnail,
        };
      });

      setCharacters(charactersList);
      setNextPage(
        `${OFFSET_PARAMS}${resData.total - resData.offset < 20 ? resData.total - resData.offset : resData.offset + 20}`,
      );
      setPrevPage(`${OFFSET_PARAMS}${resData.offset < 20 ? 0 : resData.offset - 20}`);
      window.sessionStorage.setItem('current_page', `${OFFSET_PARAMS}${resData.offset}`);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };
  useEffect(() => {
    if (!window.sessionStorage.getItem('current_page')) {
      getResource(CHARACTERS, '');
    } else {
      getResource(CHARACTERS, window.sessionStorage.getItem('current_page'));
    }
  }, []);

  return errorApi ? (
    <ErrorMessage />
  ) : (
    <>
      <CharactersNavigation getResource={getResource} nextPage={nextPage} prevPage={prevPage} />
      {characters && <CharactersList characters={characters} />}
    </>
  );
};

export default CharactersPage;
