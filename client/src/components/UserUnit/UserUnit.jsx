import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useClickOutside } from '../../hooks/useClickOutside';
import { signout } from '../../store/slice/auth';
import userIcon from './img/userIcon.svg';
import s from './UserUnit.module.css';

const UserUnit = () => {
  const [signOutButton, setSignOutButton] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClickOutside = () => {
    setSignOutButton(false);
  };

  const handleClickUnit = () => {
    setSignOutButton(true);
  };

  const handleClickSignOut = () => {
    dispatch(signout({}));
    navigate('/');
  };

  useClickOutside(onClickOutside);

  return (
    <div className={s.container} onClick={handleClickUnit}>
      <span className={s.user__name}>{window.localStorage.getItem('name')}</span>
      <div className={s.img__wrapper}>
        <img src={userIcon} alt='user_icon' />
      </div>
      {signOutButton && (
        <div className={s.signout__wrapper}>
          <button onClick={handleClickSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
};

export default UserUnit;
