import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Position } from "../";

const TestPosition = (props) => (
    <>
        <div className="position-relative" style={{ backgroundColor: "yellow", width: "100", height: "700px" }}>
            {/* <Position className="position-absolute">absolute</Position> */}
           {/* <Position className="position-fixed">fixed</Position> */}
           <Position className="sticky-top">sticky-top</Position>
           <Position className="fixed-bottom">fixed-bottom</Position>
            {/* <Position className="position-static">static</Position> */}
            <Position className="position-sticky">sticky</Position>
        </div>
    </>
)

ReactDOM.render(< TestPosition />, document.getElementById("root"));