import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import MenuModal from './MenuModal';

class NavBar extends Component {

    render() {
        return (
            <Navbar fixedTop text-center style={{ margin: '0' }}>
                <Navbar.Header style={{ marginLeft: '25vw' }}>
                    <Navbar.Brand>
                        <div href='/' style={{ fontFamily: 'Poppins' }}>
                            <a href='/' style={{ color: 'pink', textDecoration: 'none' }}>
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