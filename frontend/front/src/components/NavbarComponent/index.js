import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './style.module.css';
import logo from '../../assets/logo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarComponent() {
    return (
        <>
            <Navbar expand="lg" className={styles.custom_navbar}>
                <Container>
                    <Navbar.Brand className={styles.navbar_brand} href="#home"><img src='../../../public/logo.png' alt='logo-persona' className={styles.logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={styles.nav_link} href="/">Lista</Nav.Link>
                            <Nav.Link className={styles.nav_link} href="#link">Adicionar</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}