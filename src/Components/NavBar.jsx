import React from 'react';
import { Navbar } from 'react-bootstrap';

//components
import MenuModal from './MenuModal';

const NavBar = () => {
    return (
        <Navbar fixedTop text-center>
            <Navbar.Header style={{ marginLeft: '24vw' }}>
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

export default NavBar;