import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Error_handler_activation(valStatus , lang = {}) {
  toast.configure();
  if (valStatus === 200) {
    return toast.success(lang.activeSuccess, { position: toast.POSITION.TOP_CENTER });
  }

  if (valStatus === 400) {
    return toast.error(lang.activeFaild, { position: toast.POSITION.TOP_CENTER });
  }
}

export default Error_handler_activation

