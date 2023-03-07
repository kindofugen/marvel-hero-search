import React, { useState, useEffect, useContext } from 'react';
import { instance } from '../utils/axios';

const TelegramContext = React.createContext();

export const TelegramProvider = ({ children, ...props }) => {
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

  return (
    <TelegramContext.Provider
      value={{
        telegramShareBtn,
      }}
      {...props}
    >
      {children}
    </TelegramContext.Provider>
  );
};
export default TelegramProvider;

export const useTelegram = () => useContext(TelegramContext);
