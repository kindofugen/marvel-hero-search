import { useNavigate } from 'react-router-dom';
import iconBack from './img/iconBack.svg';
import s from './CharacterLinkBack.module.css';

const CharacterLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (event) => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <a href='#' onClick={handleGoBack} className={s.link}>
      <img className={s.link__arrow} src={iconBack} alt='GoBack' />
      <span>Go Back</span>
    </a>
  );
};

export default CharacterLinkBack;
