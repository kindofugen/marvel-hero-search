import { useState } from 'react';
import { SIGNIN_INPUTS } from '../../constants/signFormConstants';
import UiForm from '../../components/UI/UiForm';

const SignInPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <UiForm
      setLogin={setLogin}
      setPassword={setPassword}
      handleInputChange={handleInputChange}
      inputs={SIGNIN_INPUTS}
      linkPath={'/signup'}
      linkMessage={"Don't have an account yet?"}
      submitText={'Sign In'}
    />
  );
};

export default SignInPage;
