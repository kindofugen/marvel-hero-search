import PropTypes from 'prop-types';
import { DEFAULT_START_PARAMS, DEFAULT_END_PARAMS, CHARACTERS } from '../../../constants/urlConstructor';
import UiButton from '../../UI/UiButton';
import s from './CharactersNavigation.module.css';

const CharactersNavigation = ({ getResource, nextPage, prevPage }) => {
  const currentPage = window.sessionStorage.getItem('current_page');

  const handleChangePrev = () => {
    getResource(CHARACTERS, prevPage);
  };
  const handleChangeNext = () => {
    getResource(CHARACTERS, nextPage);
  };

  return (
    <>
      <div className={s.buttons__wrapper}>
        <UiButton text='Previous' onClick={handleChangePrev} disabled={currentPage === DEFAULT_START_PARAMS} />
        <UiButton text='Next' onClick={handleChangeNext} disabled={nextPage === DEFAULT_END_PARAMS} />
      </div>
    </>
  );
};

CharactersNavigation.propTypes = {
  getResource: PropTypes.func,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string,
};

export default CharactersNavigation;
