import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Error_handler_resetPassword(valStatus) {
 
  toast.configure();
 
  if(valStatus===200)
  {
   return toast.success("رمز عبور شما با موفقیت  تغییر کرد",{position: toast.POSITION.TOP_CENTER});
  }
  if(valStatus===400)
  {
  return toast.error("تکرار رمز عبور را  بدرستی وارد نکردید",{position: toast.POSITION.TOP_CENTER});
  }
}

export default Error_handler_resetPassword;
