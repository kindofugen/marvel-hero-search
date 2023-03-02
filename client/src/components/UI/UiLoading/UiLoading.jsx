import spinner from './img/spinner.svg';
import s from './UiLoading.module.css';

const UiLoading = () => {
  return <img className={s.spinner} src={spinner} />;
};

export default UiLoading;
