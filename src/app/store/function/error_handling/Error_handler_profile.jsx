import React from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Error_handler_profile(valStatus) {
  
  toast.configure();

  if(valStatus===200)
  {
  return toast.success("پروفایل شما با موفقیت ثبت شد", { position: toast.POSITION.TOP_CENTER});
  }
  if(valStatus===201)
  {
  return toast.success("با موفقیت انجام شد", { position: toast.POSITION.TOP_CENTER});
  }
  if(valStatus===400)
  {
  return toast.error("ورود ایمیل الزامیست.",{position: toast.POSITION.TOP_CENTER});
  }
 
}

export default Error_handler_profile
