import { useSelector } from 'react-redux';

export const useAuth = () => {
  const { isAuthorised } = useSelector((state) => state.auth);
  return isAuthorised;
};
