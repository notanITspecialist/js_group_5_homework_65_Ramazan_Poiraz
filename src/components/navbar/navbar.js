import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Navbar = () => {
    return (
        <div>
            <Nav style={{justifyContent:'space-around'}}>
                <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/pages/page1">Page1</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/pages/page2">Page2</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/pages/page3">Page3</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/pages/page4">Page4</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/pages/page5">Page5</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/pages/admin">Admin</NavLink>
                </NavItem>
            </Nav>
        </div>
    );
};

export default Navbar;