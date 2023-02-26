import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CHARACTERS, IMG_PORTRAIT_LARGE, IMG_ON_ERROR_LARGE } from '../../../constants/urlConstructor';
import s from './HeroCard.module.css';

const HeroCard = ({ character }) => {
  return (
    <>
      <li className={s.list__item}>
        <Link to={`/${CHARACTERS}/${character.id}`}>
          <div className={s.card__container}>
            <img
              className={s.character__img}
              src={`${character.thumbnail?.path}/${IMG_PORTRAIT_LARGE}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = IMG_ON_ERROR_LARGE;
              }}
              alt={character.name}
            />
            <div className={s.text__wrapper}>
              <p>{character.name}</p>
            </div>
          </div>
        </Link>
      </li>
    </>
  );
};

HeroCard.propTypes = {
  character: PropTypes.object,
};

export default HeroCard;
