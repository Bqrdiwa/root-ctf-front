import React,{Component} from 'react'
import up from './image/arrow-up.png';
import Image from '../../@material/Media/Image';
import { Button } from '../../@material/Button/Button';
import $ from 'jquery';

export default class ScrollTop extends Component {
  constructor() {
    super();
    this.onclick = this.onclick.bind(this);
  }
  
  onclick(){
    $("html, body").animate({ scrollTop: 0 },500);
  }

  render() {

    return (
      <Button id="arrow-top" onClick={this.onclick} >
        <Image src={up} size="20px" />
      </Button>
    );
  };
}
export {ScrollTop} ;

