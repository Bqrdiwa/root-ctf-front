import { useSubmit } from './useSubmit';
import { useSelector } from 'react-redux';

export const useProtectedSubmit = (api, data, options = {}) => {

  const user = useSelector(state => state.user);

  return useSubmit(
    api,
    data,
    {
      ...options,
      params: {
        ...(options.params || {}),
        ...user
      }
    }
  );
};
