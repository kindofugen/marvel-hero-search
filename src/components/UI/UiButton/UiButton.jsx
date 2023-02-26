import PropTypes from 'prop-types';
import s from './UiButton.module.css';

const UiButton = ({ text, onClick, disabled }) => {
  return (
    <>
      <button className={s.button} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

UiButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default UiButton;
