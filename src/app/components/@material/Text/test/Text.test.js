import React from 'react';
import ReactDOM from 'react-dom';
import { Bold, Strong, Italic, Emphasized, Marked, Small, Delete, Inserted, Subscript,Superscript } from "../";

const TestText = (props) => {
  return (
    <>
      <Bold>test tag "b"</Bold>
      <hr />
      <Strong>test tag "strong"</Strong>
      <hr />
      <Italic>test tag "italic"</Italic>
      <hr />
      <Emphasized>test tag "emphasized"</Emphasized>
      <hr />
      <Marked>test tag "marked"</Marked>
      <hr />
      <Small>test tag "small"</Small>
      <hr />
      <Delete>test tag "Delete"</Delete>
      <hr />
      <Inserted>test tag "Inserted"</Inserted>
      <hr />
      <p>test tag<Subscript> "Subscript"</Subscript></p>
      <hr />
      <p>test tag <Superscript>"Superscript"</Superscript></p>
      <hr />
    </>

  );
};

ReactDOM.render(<TestText />, document.getElementById('root'));