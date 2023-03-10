import PropTypes from 'prop-types';
import CharactersList from '../CharactersPage/CharactersList';
import UiLoading from '../UI/UiLoading';
import s from './SearchResultsPage.module.css';

const SearchResultsPage = ({ characters }) => {
  return characters ? (
    <CharactersList characters={characters} />
  ) : typeof characters === 'undefined' ? (
    <div className={s.fail__wrapper}>
      <UiLoading />
    </div>
  ) : (
    <div className={s.fail__wrapper}>
      <span className={s.fail__message}>No results</span>
    </div>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      thumbnail: PropTypes.shape({
        extension: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  ),
};

export default SearchResultsPage;
