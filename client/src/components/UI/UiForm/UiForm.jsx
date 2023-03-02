import { Link } from 'react-router-dom';
import s from './UiForm.module.css';

const UiForm = ({ handleInputChange, handleSubmit, inputs, linkPath, linkMessage, submitText }) => {
  return (
    <div className={s.container}>
      <div className={s.form__wrapper}>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.inputs__wrapper}>
            {inputs.map((input) => {
              return (
                <div key={input.id}>
                  <input
                    name={input.name}
                    type={input.type}
                    label={input.label}
                    required={input.required}
                    placeholder={input.placeholder}
                    className={s.input}
                    onChange={handleInputChange}
                  />
                </div>
              );
            })}
          </div>
          <Link className={s.form__link} to={linkPath}>
            {linkMessage}
          </Link>
          <input type='submit' name='submit' value={submitText} />
        </form>
      </div>
    </div>
  );
};

export default UiForm;
