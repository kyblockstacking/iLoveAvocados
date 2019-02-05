import React from 'react';
import { Navbar } from 'react-bootstrap';

//components
import MenuModal from './MenuModal';

const NavBar = () => {
    return (
        <Navbar fixedTop>
            <Navbar.Header style={{ display: 'inline-block', textAlign: 'center', width: '100%', paddingTop: '10px' }}>
                <div href='/' style={{ fontFamily: 'Poppins' }}>
                    <a href='/' style={{ color: 'olive', textDecoration: 'none', margin: '0', fontSize: '1.5em' }}>
                        Avocado.California
                            </a>
                    &nbsp;
                        <MenuModal />
                </div>
            </Navbar.Header >
        </Navbar>

    );
};

export default NavBar;