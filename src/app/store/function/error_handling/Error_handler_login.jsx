import React from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Error_handler_login(valStatus) {
  toast.configure();
 
//  if(valStatus===200)
//  {
//  return toast.success("کاربر گرامی به سامانه خوش آمدید", { position: toast.POSITION.TOP_CENTER});
// }

 if(valStatus===400)
 {
 return toast.error("اطلاعات وارد شده نادرست می باشد.لطفا دوباره امتحان کنید.",{position: toast.POSITION.TOP_CENTER});
 }
//  if(valStatus===401)
//  {
//   return toast.error('برای دستیابی باید به سایت وارد شوید');
//  }
//  if(valStatus===403)
//  {
//   return toast.error('دسترسی غیر مجاز است');
//  }
//  if(valStatus===404)
//  {
//   return toast.error('یافت نشد');
//  }
//  if(valStatus===405)
//  {
//   return toast.error('متد استفاده شده اشتباه است');
//  }
//  if(valStatus===500)
//  {
//   return toast.error('خطای  سرور  وجود دارد.');
//  }

}
export default Error_handler_login;

