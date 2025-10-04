import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ListGroup , ListGroupItem} from "../";

const TestList = (props) => (
    <>
    <p>by default list</p>
        <ListGroup >
            <ListGroupItem >home</ListGroupItem>
            <ListGroupItem>contact</ListGroupItem>
            <ListGroupItem>about</ListGroupItem>
        </ListGroup>
        <hr/>
        <p>horizontal list</p>
        <ListGroup horizontal>
            <ListGroupItem>home</ListGroupItem>
            <ListGroupItem>contact</ListGroupItem>
            <ListGroupItem>about</ListGroupItem>
        </ListGroup>
    </>

)

ReactDOM.render(<TestList />, document.getElementById("root"));
