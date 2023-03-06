import CharacterInfoPage from '../containers/CharacterInfoPage/CharacterInfoPage';
import HomePage from '../containers/HomePage';
import SignUpPage from '../containers/SignUpPage/SignUpPage';
import SignInPage from '../containers/SignInPage';
import FavoritesPage from '../containers/FavoritesPage';
import SearchHistoryPage from '../containers/SearchHistoryPage';

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
  {
    path: '/favorites',
    element: <FavoritesPage />,
  },
  {
    path: '/history',
    element: <SearchHistoryPage />,
  },
];

export default routesConfig;
