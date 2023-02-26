import sadCaptain from './img/sadCaptain.jpg';
import s from './ErrorMessage.module.css';

const ErrorMessage = () => {
  return (
    <div className={s.container}>
      <img className={s.error__img} src={sadCaptain} alt='Captain America' />
      <div className={s.error__message}>
        <p>
          Oh no! Something went wrong...
          <br />
          We will be back when everything is fixed.
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;
