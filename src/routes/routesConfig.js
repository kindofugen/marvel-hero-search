import CharactersPage from '../containers/CharactersPage';
import CharacterInfoPage from '../containers/CharacterInfoPage/CharacterInfoPage';

const routesConfig = [
  {
    path: '/',
    element: <CharactersPage />,
  },
  {
    path: '/characters/:id',
    element: <CharacterInfoPage />,
  },
];

export default routesConfig;
