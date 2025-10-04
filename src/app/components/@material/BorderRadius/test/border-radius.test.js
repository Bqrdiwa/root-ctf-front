import React from 'react';
import ReactDOM from 'react-dom';
import { BorderRadius } from "../";

const TestBorderRadius = () => (
  <>
    <BorderRadius size="15px 50px 30px 5px">
      <img alt="100x100" src="https://placehold.it/100x100" />
      <BorderRadius size="circle">
        <img alt="100x100" src="https://placehold.it/100x100" />
        <img alt="200x200" src="https://placehold.it/200x200" />
      </BorderRadius>
    </BorderRadius>
  </>
)

ReactDOM.render(<TestBorderRadius />, document.getElementById("root"));


