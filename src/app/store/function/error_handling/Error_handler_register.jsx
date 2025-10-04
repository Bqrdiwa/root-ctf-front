import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Div } from '../../../components/@material/Base';

function Error_handler_register(response) {
  // toast.configure();

  if (response.statuse === 201) {
   alert("ثبت  نام شما با موفقیت انجام شد.لطفا ایمیل خود را جهت فعالسازی بررسی نمایید.", { position: toast.POSITION.TOP_CENTER });
  }

  if (response.statuse === 400) {

    if (response.data.username) {
      for (var x of response.data.username) {
       alert(x);
      }
    }


    if (response.data.email) {
      for (var x of response.data.email) {
      alert(x);
      }
    }

  }

};

export default Error_handler_register;
