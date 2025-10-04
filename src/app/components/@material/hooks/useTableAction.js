import { useCallback } from "react";
import { useProtectedSubmit } from "./useProtectedSubmit";


export const useTableAction = (
  { api, successCallback, item, type, user_role, param_id_name }
) => {

  const successHandle = useCallback(
    (data) => {
      successCallback({ type, payload: { ...item, user_role }, data })
    },
    [item, type, successCallback, user_role],
  )

  const [submit, response, load] = useProtectedSubmit(
    api,
    undefined,
    {
      onSuccess: successHandle,
      params: {
        [param_id_name]: item.id
      }
    }
  );

  const handleClick = useCallback(
    () => {
      if (load === 0) {
        submit();
      }
    },
    [load, submit],
  )

  const disabled = load > 0 ? true : undefined;

  return { onAction: handleClick, disabled, response };
}