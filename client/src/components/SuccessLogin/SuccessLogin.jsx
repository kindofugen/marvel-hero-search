import { useNavigate } from 'react-router';
import s from './SuccessLogin.module.css';

const SuccessLogin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={s.container}>
      <div className={s.message__wrapper}>
        <div className={s.message}>
          <p>You have successfully registered. Now you have access to all the functionality of the application.</p>
          <div className={s.button} onClick={handleClick}>
            Great!
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessLogin;
