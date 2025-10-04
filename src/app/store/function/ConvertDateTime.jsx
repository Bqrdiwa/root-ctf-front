import moment from 'jalali-moment';
import { useSelector } from 'react-redux';

function ConvertDateTime({ date }) {

  const lang = useSelector(state => state.language);

  if (lang.apiTag === "fa") {
    return (moment.utc(date).format('jYYYY/jMM/jDD'))
  } else {
    return (moment.utc(date).format('YYYY/MM/DD'))
  }
}

export default ConvertDateTime;

