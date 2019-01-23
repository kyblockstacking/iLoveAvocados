import React from 'react';
import { Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

class NavBar extends React.Component {

    render() {
        return (
            <Navbar collapseOnSelect staticTop>
                <Navbar.Header style={{ marginLeft: '33%' }}>
                    <Navbar.Brand>
                        <a href="#brand">Avocado Restaurant</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header >
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Avocado Chef</MenuItem>
                            <MenuItem eventKey={3.2}>Menu</MenuItem>
                            <MenuItem eventKey={3.3}>Reservation</MenuItem>
                            <MenuItem eventKey={3.3}>More About Avocados</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };

}

export default NavBar;