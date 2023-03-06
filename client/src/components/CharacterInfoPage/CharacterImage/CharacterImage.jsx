import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useFavorite } from '../../../hooks/useFavorite';
import { useAuth } from '../../../hooks/useAuth';
import { setCharacterToFavorite, removeCharacterFromFavorite } from '../../../store/slice/favorite';
import { IMG_ON_ERROR_INCREDIBLE } from '../../../constants/apiConstants';
import star from './img/star.svg';
import starFilled from './img/star-fill.svg';
import s from './CharacterImage.module.css';

const CharacterImage = ({ characterImg, characterName, characterId }) => {
  let isFavorite = useFavorite(+characterId);
  const isAuth = useAuth();
  const dispatch = useDispatch();
  const characterData = {
    id: parseInt(characterId),
    name: characterName,
    img: characterImg,
  };

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeCharacterFromFavorite(characterData));
    } else {
      dispatch(setCharacterToFavorite(characterData));
    }
  };

  return (
    <div className={s.wrapper}>
      <img
        className={s.character__img}
        src={characterImg}
        alt={characterName}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = IMG_ON_ERROR_INCREDIBLE;
        }}
      />
      <img
        src={isFavorite ? starFilled : star}
        onClick={isAuth ? toggleFavorite : () => alert('You should be logged in to perform this action.')}
        diasabled={!isAuth}
        className={s.favorite}
        alt='favorite'
      />
    </div>
  );
};

CharacterImage.propTypes = {
  characterImg: PropTypes.string,
  characterName: PropTypes.string,
  characterId: PropTypes.string,
};

export default CharacterImage;
