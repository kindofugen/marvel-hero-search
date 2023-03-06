import { useState } from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useTheme, THEME_LIGHT, THEME_DARK } from '../../context/ThemeProvider';
import themeConfig from './img/themeConfig.svg';
import s from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [switchTheme, setSwitchTheme] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const isTheme = useTheme();

  const onClickOutside = () => {
    setSwitchTheme(false);
  };

  const handleClickIcon = () => {
    setSwitchTheme(true);
  };

  const toggleButton = () => {
    if (!darkTheme) {
      setDarkTheme(true);
      isTheme.change(THEME_DARK);
    } else {
      setDarkTheme(false);
      isTheme.change(THEME_LIGHT);
    }
  };

  useClickOutside(onClickOutside);

  return (
    <div className={s.wrapper}>
      <img className={s.icon} onClick={handleClickIcon} src={themeConfig} alt='' />
      {switchTheme && (
        <div className={s.buttons__wrapper}>
          <button onClick={toggleButton}>{darkTheme ? 'Light' : 'Dark'}</button>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
