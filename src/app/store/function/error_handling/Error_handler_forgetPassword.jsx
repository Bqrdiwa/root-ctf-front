
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Error_handler_forgetPassword(valStatus) {
  toast.configure();
 
 if(valStatus===201)
 {
  return toast.success("ایمیل با موفقیت ارسال شد.لطفا ایمیل خود را بررسی نمایید",{position: toast.POSITION.TOP_CENTER});
 }
 if(valStatus===400)
 {
 return toast.error("کاربری با ایمیل وارد شده یافت نشد",{position: toast.POSITION.TOP_CENTER});
 }
 
}

export default Error_handler_forgetPassword
