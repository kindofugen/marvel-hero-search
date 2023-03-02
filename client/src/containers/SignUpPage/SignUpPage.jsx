import { useState } from 'react';
import { SIGNUP_INPUTS } from '../../constants/signFormConstants';
import UiForm from '../../components/UI/UiForm';

const SignUpPage = () => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (event.target.name === 'login') {
      setLogin(value);
    }
    if (event.target.name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //event.target.reset();
  };

  return (
    <UiForm
      setLogin={setLogin}
      setPassword={setPassword}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      inputs={SIGNUP_INPUTS}
      linkPath={'/signin'}
      linkMessage={'Already have an account?'}
      submitText={'Sign Up'}
    />
  );
};

export default SignUpPage;
