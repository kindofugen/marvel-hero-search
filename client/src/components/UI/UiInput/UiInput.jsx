import PropTypes from 'prop-types';
import cancel from './img/cancel.png';
import cn from 'classnames';
import s from './UiInput.module.css';

const UiInput = ({ value, handleInputChange, placeholder, handleInputClear }) => {
  return (
    <div className={s.container}>
      <div className={s.input__wrapper}>
        <input
          type='text'
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={placeholder}
          className={s.search__input}
        />
        <img
          src={cancel}
          alt='cancel'
          className={cn(s.clear, !value && s.clear__disabled)}
          onClick={handleInputClear}
        />
      </div>
    </div>
  );
};

UiInput.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default UiInput;
