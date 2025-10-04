import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { TextUtils } from "../";
import 'bootstrap/dist/css/bootstrap.min.css';


class Ts extends Component {
  render() {
    return (
      <div {...this.props}>Hello worlds</div>
    )
  };
};


const TestText = (props) => {

  return (
    <>
      <TextUtils text-wrap text-right className="text-uppercase">
        <p>this is test</p>
      </TextUtils>
      <TextUtils className="text-wrap font-weight-bolder">
        <div style={{ width: "40px", backgroundColor: "blue" }}>this is testtttttttttttttttttttttttttttttttttt</div>
      </TextUtils>
      <TextUtils >
        <p>this is test</p>
      </TextUtils>
      <TextUtils className="font-weight-bold">
        <Ts></Ts>
      </TextUtils>

    </>
  );
};

ReactDOM.render(<TestText />, document.getElementById('root'));