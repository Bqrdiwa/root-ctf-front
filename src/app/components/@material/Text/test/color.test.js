import React from 'react';
import ReactDOM from 'react-dom';
import { TextColor } from "../";
import 'bootstrap/dist/css/bootstrap.min.css';

const TestText = (props) => {

  return (
    <>
      <TextColor text-info ><p>this is test</p></TextColor>
      <TextColor className="text-success"><p>this is test</p></TextColor>
      <TextColor text-danger><p>this is test</p></TextColor>
      <TextColor text-warning><p>this is test</p></TextColor>
      <TextColor text-muted><p>this is test</p></TextColor>
    </>
  );
};

ReactDOM.render(<TestText />, document.getElementById('root'));