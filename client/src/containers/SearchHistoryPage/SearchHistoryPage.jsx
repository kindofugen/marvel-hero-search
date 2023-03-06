import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromHistory, clearHistory } from '../../store/slice/history';
import cross from './img/cross.svg';
import s from './SearchHistoryPage.module.css';

const SearchHistoryPage = () => {
  const { history } = useSelector((state) => state.history);
  const dispatch = useDispatch();
  console.log(history);
  return (
    <div className={s.container}>
      <h1 className={s.header}>You searched: </h1>
      {history.length ? (
        <ul className={s.wrapper}>
          <button className={s.button__clear} onClick={() => dispatch(clearHistory())}>
            Clear history
          </button>
          {history.map(({ id, value }) => {
            return (
              <div className={s.link__wrapper} key={id}>
                <Link className={s.link} to={`/?characterName=${value} `}>
                  <li className={s.history__item}>{value}</li>
                </Link>
                <img src={cross} onClick={() => dispatch(removeFromHistory(id))} alt='remove' />
              </div>
            );
          })}
        </ul>
      ) : (
        <span className={s.message__empty}>Your search history is empty</span>
      )}
    </div>
  );
};

export default SearchHistoryPage;
