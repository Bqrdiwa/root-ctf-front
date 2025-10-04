import React, { Component } from 'react'
import Button from '../../../components/@material/Button/Button';

class darkMode extends Component{
  dark = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  render() {
    return (
      <>
        <Button onClick={this.dark}>1</Button>
      </>
    )
  };
};

export default darkMode;

