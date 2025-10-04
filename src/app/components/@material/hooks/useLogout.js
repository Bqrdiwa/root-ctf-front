import React from 'react';
import { useDispatch } from "react-redux";
import { delete_user_detail } from "../../../store/action/User";
import { useCallback, useState } from "react";
import { LOGOUT } from "../../../store/action/API/login";
import { Redirect } from "react-router";

export const useLogout = () => {

  const [redirect, setredirect] = useState("")
  const dispatch = useDispatch();

  const logout = useCallback(
    () => {
      LOGOUT();
      dispatch(delete_user_detail())
      setredirect(() => (<Redirect to="" />))
    },
    [dispatch]
  )

  return [redirect, logout];
}