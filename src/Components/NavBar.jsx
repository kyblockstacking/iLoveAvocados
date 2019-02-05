import React from 'react';
import { Navbar } from 'react-bootstrap';

//components
import MenuModal from './MenuModal';

const NavBar = () => {

    const styles = {
        navbarHeader: {
            display: 'inline-block',
            textAlign: 'center',
            width: '100%',
            paddingTop: '10px'
        },
        navbarBrand: {
            fontFamily: 'Poppins',
            color: 'olive',
            textDecoration: 'none',
            margin: '0',
            fontSize: '1.5em'
        }
    };

    return (
        <Navbar className='navbar' fixedTop>
            <Navbar.Header className='navbarHeader' style={styles.navbarHeader}>
                <a className='navbarBrand' href='/' style={styles.navbarBrand}>
                    Avocado.California
                </a>
                &nbsp;
                <MenuModal />
            </Navbar.Header >
        </Navbar>

    );
};

export default NavBar;