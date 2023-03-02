import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../store/slice/auth';
import { SIGNUP_INPUTS } from '../../constants/signFormConstants';
import { AUTH_HOST, AUTH_PORT } from '../../constants/apiConstants';
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
      const newUser = await axios.post(`${AUTH_HOST + AUTH_PORT}/api/auth/signup`, userData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      dispatch(signin(newUser.data));
      window.localStorage.setItem('token', newUser.data.token['accessToken']);
      window.localStorage.setItem('name', newUser.data.login);
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
