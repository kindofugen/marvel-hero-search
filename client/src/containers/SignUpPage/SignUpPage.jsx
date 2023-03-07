import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../store/slice/auth';
import { SIGNUP_INPUTS } from '../../constants/signFormConstants';
import { instance } from '../../utils/axios';
import { ERROR_MESSAGE_LOCAL } from '../../constants/errorMessageLocalisation';
import UiForm from '../../components/UI/UiForm';
import SuccessLogin from '../../components/SuccessLogin';

const SignUpPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [successLogin, setSuccessLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (event.target.name === 'login') {
      setLogin(value);
    }
    if (event.target.name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      login,
      password,
    };
    try {
      const newUser = await instance.post('/auth/signup', userData);
      dispatch(signin(newUser.data));
      setSuccessLogin(true);
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE_LOCAL[e.response.data.error.message]);
    }
  };

  return successLogin ? (
    <SuccessLogin />
  ) : (
    <UiForm
      setLogin={setLogin}
      setPassword={setPassword}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      inputs={SIGNUP_INPUTS}
      linkPath={'/signin'}
      linkMessage={'Already have an account?'}
      submitText={'Sign Up'}
      errorMessage={errorMessage}
    />
  );
};

export default SignUpPage;
