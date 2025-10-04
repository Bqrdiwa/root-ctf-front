import React from 'react';
import ReactDOM from 'react-dom';
import { Head, Display } from "../";
import 'bootstrap/dist/css/bootstrap.min.css';


const TestText = (props) => {
    
  return (
    <>
      <Head priority="1"><Display priority="1">heading h1</Display></Head>
      <Head priority="2">heading h2</Head>
      <Head priority="3">heading h3</Head>
      <Head priority="4">heading h4</Head>
      <Head priority="5">heading h5</Head>
      <Head priority="6">heading h6</Head>

      <hr />
    </>
  );
};

ReactDOM.render(<TestText />, document.getElementById('root'));