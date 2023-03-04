import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import marvelLogo from './img/marvelLogo.png';
import signIcon from './img/signIcon.svg';
import UserUnit from '../UserUnit/UserUnit';
import s from './Header.module.css';

const Header = () => {
  const isAuthorised = useAuth();
  return (
    <div className={s.container}>
      <Link to='/'>
        <div className={s.logo__wrapper}>
          <img src={marvelLogo} alt='logo' />
        </div>
      </Link>
      {isAuthorised ? (
        <UserUnit />
      ) : (
        <div className={s.sign__wrapper}>
          <Link to='/signup'>
            <span>Sign Up</span>
          </Link>
          <Link to='/signin'>
            <span>
              Sign In
              <div className={s.icon__wrapper}>
                <img src={signIcon} alt='sign_in' />
              </div>
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
