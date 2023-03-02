import PropTypes from 'prop-types';
import s from './CharacterInfo.module.css';

const CharacterInfo = ({ characterInfo }) => {
  return (
    <div className={s.wrapper}>
      <span className={s.description__header}>Description</span>
      <p className={s.description__text}>{characterInfo}</p>
    </div>
  );
};

CharacterInfo.propTypes = {
  characterInfo: PropTypes.string,
};

export default CharacterInfo;
