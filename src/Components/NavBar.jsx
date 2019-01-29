import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import MenuModal from './MenuModal';

class NavBar extends Component {

    render() {
        return (
            <Navbar fixedTop text-center style={{ margin: '0' }}>
                <Navbar.Header style={{ marginLeft: '25vw' }}>
                    <Navbar.Brand>
                        <div style={{ fontFamily: 'Poppins' }}>Avocado.California&nbsp;<MenuModal /></div>
                    </Navbar.Brand>
                </Navbar.Header >
            </Navbar>

        );
    };
};

export default NavBar;