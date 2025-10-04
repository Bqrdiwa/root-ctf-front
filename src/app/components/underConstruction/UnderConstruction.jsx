import React, { Component } from 'react';
import Image from '../@material/Media/Image';
import Construction from './image/under-counstruction.jpg';
import Box from '../@material/Box/Box';
import { Div } from '../@material/Base';


class UnderConstruction extends Component{
  render(){
    return (
      <>
      <Box pt="5">
        <Div>
        <Image src={Construction} className="under-construction" width="50%" height="auto"/>
        </Div> 
      </Box>
     
      </>
    );
  };
};

export default UnderConstruction;
