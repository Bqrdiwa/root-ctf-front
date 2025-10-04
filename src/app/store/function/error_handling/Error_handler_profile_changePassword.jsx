
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Error_handler_profile_changePassword(valStatus) {
  toast.configure();

  if(valStatus===200)
  {
  return toast.success("رمزعبور شما با موفقیت تغییر کرد", { position: toast.POSITION.TOP_CENTER});
  }
  
  if(valStatus===400)
  {
  return toast.error("یکی از فیلدهای رمزعبور را به درستی وارد نکرده اید.",{position: toast.POSITION.TOP_CENTER});
  }
}

export default Error_handler_profile_changePassword;
