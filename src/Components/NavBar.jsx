import React, { Component } from 'react';
import { Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {

    render() {
        return (
            <Navbar fixedTop text-center style={{ margin: '0' }}>
                <Navbar.Header style={{ marginLeft: '25vw' }}>
                    <Navbar.Brand>
                        <a href="#brand">Avocado.California</a>
                    </Navbar.Brand>
                </Navbar.Header >
                <Nav style={{ textAlign: 'center' }}>
                    <NavDropdown eventKey={3} id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Avocado Chef</MenuItem>
                        <MenuItem eventKey={3.2}>Menu</MenuItem>
                        <MenuItem eventKey={3.3}>Reservation</MenuItem>
                        <MenuItem eventKey={3.3}>More About Avocados</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    };
};

export default NavBar;