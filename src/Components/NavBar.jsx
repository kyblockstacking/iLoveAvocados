import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import MenuModal from './MenuModal';

class NavBar extends Component {

    render() {
        return (
            <Navbar fixedTop text-center>
                <Navbar.Header style={{ marginLeft: '25vw' }}>
                    <Navbar.Brand>
                        <div href='/' style={{ fontFamily: 'Poppins' }}>
                            <a href='/' style={{ color: 'olive', textDecoration: 'none', margin: '0' }}>
                                Avocado.California
                            </a>
                            &nbsp;
                        <MenuModal />
                        </div>
                    </Navbar.Brand>
                </Navbar.Header >
            </Navbar>

        );
    };
};

export default NavBar;