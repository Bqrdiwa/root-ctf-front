import moment from 'jalali-moment';
import { useSelector } from 'react-redux';

function Timer({ date }) {

  const lang = useSelector(state => state.language);

  if (lang.apiTag === "fa") {
    return (moment(date).format('HH:mm:ss jYYYY/jMM/jDD'))
  } else {
    return (moment(date).format('YYYY/MM/DD HH:mm:ss'))
  }
}

export default Timer;

