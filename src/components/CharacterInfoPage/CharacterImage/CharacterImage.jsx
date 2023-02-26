import PropTypes from 'prop-types';
import { IMG_ON_ERROR_INCREDIBLE } from '../../../constants/apiConstants';
import s from './CharacterImage.module.css';

const CharacterImage = ({ characterImg, characterName }) => {
  return (
    <div>
      <img
        className={s.character__img}
        src={characterImg}
        alt={characterName}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = IMG_ON_ERROR_INCREDIBLE;
        }}
      />
    </div>
  );
};

CharacterImage.propTypes = {
  characterImg: PropTypes.string,
  characterName: PropTypes.string,
};

export default CharacterImage;
