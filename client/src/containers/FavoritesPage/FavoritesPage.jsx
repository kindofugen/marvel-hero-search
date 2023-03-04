import { useSelector, useDispatch } from 'react-redux';
import { removeCharacterFromFavorite } from '../../store/slice/favorite';
import { Link } from 'react-router-dom';
import cross from './img/cross.svg';
import s from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const dispatch = useDispatch();
  const { favorite } = useSelector((state) => state.favorite);

  return (
    <>
      {favorite.length < 1 ? (
        <h2 className={s.empty_page}>You haven't added anything to your favorites yet</h2>
      ) : (
        <ul className={s.container}>
          {favorite.map(({ id, name, img }) => {
            return (
              <li key={id}>
                <div className={s.card__wrapper}>
                  <img
                    className={s.remove}
                    src={cross}
                    onClick={() => dispatch(removeCharacterFromFavorite({ id, name, img }))}
                    alt='remove'
                  />
                  <Link className={s.link} to={`/characters/${id}`}>
                    <img src={img} alt={name} />
                    <div className={s.name__wrapper}>
                      <span>{name}</span>
                    </div>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default FavoritesPage;
