import React from 'react'
import Icon from '../../components/@material/Icon/Icon';
import { Div } from '../../components/@material/Base';

export default function solvedRatStar({ val }) {
  const rate = val * 100;
  switch (true) {
    case rate == 0:
      return (
        <>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
        </>
      );
    case rate <= 20:
      return (
        <>
          <span><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span><Icon name="star" size="12px" margin="1px" /></span>
          <span><Icon name="star" size="12px" margin="1px" /></span>
          <span><Icon name="star" size="12px" margin="1px" /></span>
          <span><Icon name="star" size="12px" margin="1px" /></span>
        </>

      );
    case rate <= 40:
      return (
        <>

          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
        </>
      );
    case rate <= 60:
      return (
        <>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
        </>
      );
    case rate <= 80:
      return (
        <>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" margin="1px" /></span>
        </>
      );
    case rate <= 100:
      return (
        <a>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
          <span ><Icon name="star" size="12px" fill="gold" margin="1px" /></span>
        </a>
      );
    default:
      return '';
  }
}

