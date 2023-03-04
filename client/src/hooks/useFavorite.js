import { useSelector } from 'react-redux';
export const useFavorite = (id) => {
  const { favorite } = useSelector((state) => state.favorite);
  return favorite.some((el) => el.id === id);
};
