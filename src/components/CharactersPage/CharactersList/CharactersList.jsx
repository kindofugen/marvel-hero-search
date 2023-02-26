import PropTypes from 'prop-types';
import HeroCard from '../../UI/HeroCard/HeroCard';
import s from './CharactersList.module.css';

const CharactersList = ({ characters }) => {
  return (
    <>
      <ul className={s.list__container}>
        {characters.map((character) => {
          return <HeroCard key={character.id} character={character} />;
        })}
      </ul>
    </>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.array,
};

export default CharactersList;
