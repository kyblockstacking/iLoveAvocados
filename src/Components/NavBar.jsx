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
<<<<<<< HEAD
        <Navbar fixedTop>
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
=======
        <Navbar
            className='navbar'
            fixedTop
        >
            <Navbar.Header
                className='navbarHeader'
                style={styles.navbarHeader}
            >
                <a
                    className='navbarBrand'
                    href='/'
                    style={styles.navbarBrand}
                >
                    Avocado.California
                </a>
                &nbsp;
                <MenuModal />
>>>>>>> a535f9576951b13318de1757daa59492b50e18b0
            </Navbar.Header >
        </Navbar>

    );
};

export default NavBar;