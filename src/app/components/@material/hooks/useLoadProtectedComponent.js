import { useLoadComponent } from './useLoadComponent';
import { useSelector } from 'react-redux';

export const useLoadProtectedComponent = (apis = [], params = {}, dependencies = []) => {

  const user = useSelector(state => state.user)

  return useLoadComponent(
    apis,
    { params: { ...user, ...params } },
    [...dependencies, user.access, user.lock]
  );
}
