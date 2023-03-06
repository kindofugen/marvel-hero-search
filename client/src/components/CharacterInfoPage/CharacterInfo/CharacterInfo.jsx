import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { instance } from '../../../utils/axios';
import s from './CharacterInfo.module.css';

const CharacterInfo = ({ characterInfo }) => {
  const [telegramShareBtn, setTelegramShareBtn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await instance.get('/telegramShare');
        setTelegramShareBtn(res.data.telegramEnable);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  console.log(telegramShareBtn);
  return (
    <div className={s.wrapper}>
      <div>
        <span className={s.description__header}>Description</span>
        <p className={s.description__text}>{characterInfo}</p>
      </div>
      {telegramShareBtn && (
        <a
          className={s.telegram__button}
          href={`https://t.me/share/url?url=${window.location.href}&text="Just look at this character!"`}
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
