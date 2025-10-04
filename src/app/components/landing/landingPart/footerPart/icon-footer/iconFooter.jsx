import React from 'react'
import Icon from '../../../../@material/Icon/Icon';
import Div from '../../../../@material/Base/Div';
import icons from './icons';

function iconFooter() {

  const fullIcon = icons;
  const iconList = fullIcon.iconList;

  return (
    <div className="d-flex justify-content-center">
      <Div className="footer-icon" >
        {
          iconList.map((index) => (
            <div key={index.id}>
              <div><a href={index.url} target="_blank"><Icon name={index.iconName} /></a></div>
            </div>
          ))
        }
      </Div>
    </div>
  )
};

export default iconFooter;
