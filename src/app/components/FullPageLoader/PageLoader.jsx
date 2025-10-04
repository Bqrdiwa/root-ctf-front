import React, { Component } from 'react';
import Spinner from 'react-bootstrap/Spinner';

class PageLoader extends Component{
 state={}

  render(){
    return (
      <div className="loader-contairne">
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
      </div>
    )
  }
}

export default PageLoader;
