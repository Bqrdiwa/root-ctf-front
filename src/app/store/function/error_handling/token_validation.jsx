import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function token_validation(valStatus, lang = {}) {

  toast.configure();
  if (valStatus === 200) {
    return toast.success(lang.successToken, { position: toast.POSITION.TOP_CENTER });
  }

  if (valStatus === 400) {
    return toast.error(lang.faildToken, { position: toast.POSITION.TOP_CENTER });
  }
}

export default token_validation;
