import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';


const Header = () => {
    const { user, handleLogOut } = useAuth()

    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Lab</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Our Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                    </Nav>
                    {user.email ? <button onClick={handleLogOut} className="btn btn-info">Logout</button> : <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                    }
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user.displayName}</a>

                    </Navbar.Text>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;