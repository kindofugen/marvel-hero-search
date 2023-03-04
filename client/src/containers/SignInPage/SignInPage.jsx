import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../../store/slice/auth';
import { SIGNIN_INPUTS } from '../../constants/signFormConstants';
import { AUTH_HOST, AUTH_PORT } from '../../constants/apiConstants';
import { ERROR_MESSAGE_LOCAL } from '../../constants/errorMessageLocalisation';
import UiForm from '../../components/UI/UiForm';

const SignInPage = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      const user = await axios.post(`${AUTH_HOST + AUTH_PORT}/api/auth/signin`, userData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      dispatch(signin(user.data));
      navigate('/');
    } catch (e) {
      setErrorMessage(ERROR_MESSAGE_LOCAL[e.response.data.error.message]);
    }
  };

  return (
    <UiForm
      setLogin={setLogin}
      setPassword={setPassword}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      inputs={SIGNIN_INPUTS}
      linkPath={'/signup'}
      linkMessage={"Don't have an account yet?"}
      submitText={'Sign In'}
      errorMessage={errorMessage}
    />
  );
};

export default SignInPage;
