import CharactersPage from '../containers/CharactersPage';
import CharacterInfoPage from '../containers/CharacterInfoPage/CharacterInfoPage';
import HomePage from '../containers/HomePage';

const routesConfig = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/characters/:id',
    element: <CharacterInfoPage />,
  },
];

export default routesConfig;
