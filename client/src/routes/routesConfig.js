import CharacterInfoPage from '../containers/CharacterInfoPage/CharacterInfoPage';
import HomePage from '../containers/HomePage';
import SignUpPage from '../containers/SignUpPage/SignUpPage';
import SignInPage from '../containers/SignInPage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/characters/:id',
    element: <CharacterInfoPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
];

export default routesConfig;
