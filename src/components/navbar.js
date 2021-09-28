import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'gatsby';
import BrainscanLogo from '../assets/brainscanlogo.svg';
import "../assets/css/main.css";

export default function BrainscanNav() {
    return (
        <Navbar bg="rgba(255, 165, 0, 0.73)" fixed="top" expand="true" variant="dark">
            <Container style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Navbar.Brand>
                    <Link to='/'>
                        <BrainscanLogo width="50%" height="50%" />
                    </Link>
                </Navbar.Brand>
                <Nav className="me-auto" style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginRight: "2.5%"}}>
                    <Nav.Link style={{textAlign: "right"}}>{' '}
                        <Link style={{color: "black"}} to="/about-us">About Us</Link>
                    </Nav.Link>
                    <Nav.Link style={{textAlign: "right"}}>{' '}
                        <Link style={{color: "black"}}>Visual Arts</Link>
                    </Nav.Link>
                    <Nav.Link style={{color: "black", textAlign: "right"}}>{' '}
                        Thought Pieces
                    </Nav.Link>
                    <Nav.Link style={{color: "black", textAlign: "right"}}>{' '}
                        Activism{' '}
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
