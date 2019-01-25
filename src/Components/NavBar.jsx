import React, { Component } from 'react';
import { Navbar, Glyphicon } from 'react-bootstrap';

class NavBar extends Component {

    render() {
        return (
            <Navbar fixedTop text-center style={{ margin: '0' }}>
                <Navbar.Header style={{ marginLeft: '25vw' }}>
                    <Navbar.Brand>
                        <a href="#brand">Avocado.California</a>
                        &nbsp;
                        <Glyphicon glyph="align-left" />
                    </Navbar.Brand>
                </Navbar.Header >
            </Navbar>
        );
    };
};

export default NavBar;