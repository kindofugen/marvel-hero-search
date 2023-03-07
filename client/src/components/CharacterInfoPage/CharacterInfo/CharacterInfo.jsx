import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useTelegram } from '../../../context/TelegramProvider';
import { APP_HOST } from '../../../constants/apiConstants';
import s from './CharacterInfo.module.css';

const CharacterInfo = ({ characterInfo }) => {
  const telegramShareBtn = useTelegram().telegramShareBtn;
  const path = useLocation().pathname;
  const url = APP_HOST + path;

  return (
    <div className={s.wrapper}>
      <div>
        <span className={s.description__header}>Description</span>
        <p className={s.description__text}>{characterInfo}</p>
      </div>
      {telegramShareBtn && (
        <a
          className={s.telegram__button}
          href={`https://t.me/share/url?url=${url}&text="Just look at this character!"`}
          target='_blank'
        >
          <i></i>
        </a>
      )}
    </div>
  );
};

CharacterInfo.propTypes = {
  characterInfo: PropTypes.string,
};

export default CharacterInfo;
