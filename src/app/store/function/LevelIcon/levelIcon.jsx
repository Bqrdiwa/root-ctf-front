import React from 'react';
import { Div } from '../../../components/@material/Base';

function levelIcon({level}) {
  switch(level) {
    case 4:
      return (
        <a>سخت</a>
      );
      case 1:
      return (
       <a>خیلی ساده</a>
      );
      case 2:
      return (
      <a>ساده</a>
      );
      case 3:
        return (
        <a>متوسط</a>
        );
        case 5:
          return (
          <a>خیلی سخت</a>
          );
    default:
      return '';
  }
}

export default levelIcon;
