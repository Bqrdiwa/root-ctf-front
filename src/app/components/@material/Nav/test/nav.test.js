import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Nav, NavItem, NavLink, NavGroup } from "../";

const TestNav = (props) => (
    <>
        <Nav>
           
            <NavGroup className=" align-self-stretch bg-success">
                <NavItem>
                    <NavLink >link1</NavLink>
                </NavItem>
                <NavItem >
                    <NavLink>link2</NavLink>
                </NavItem>
            </NavGroup>
        </Nav>

        <hr />

        <Nav vertical>
        <NavGroup >
            <NavItem>
                <NavLink>link1</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>link2</NavLink>
            </NavItem>
        </NavGroup>
            
        </Nav>

        <hr />

        <Nav className="navrootme">
            <NavItem >
                <NavLink>link1</NavLink>
            </NavItem>
            <NavItem>
                <NavLink>link2</NavLink>
            </NavItem>
        </Nav>
    </>
)

ReactDOM.render(< TestNav />, document.getElementById("root"));