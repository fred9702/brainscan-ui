import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'gatsby';
import BrainscanLogo from '../assets/brainscanlogo.svg';
import "../assets/css/main.css";
import "../assets/css/navbar.css";

export default function BrainscanNav() {
    return (
        <Navbar bg="rgba(255, 165, 0, 0.73)" fixed="top" expand="true" variant="dark">
            <Container style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Link to="/">
                    <Navbar.Brand>
                        <BrainscanLogo width="50%" height="50%" />
                    </Navbar.Brand>
                </Link>
                <Nav className="me-auto" style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginRight: "2.5%", textAlign: "right"}}>
                    <Link to="/about-us">
                        <Nav.Link>{' '}
                            About Us
                        </Nav.Link>
                    </Link>
                    <Nav.Link>{' '}
                        Visual Arts
                    </Nav.Link>
                    <Nav.Link >{' '}
                        Thought Pieces
                    </Nav.Link>
                    <Nav.Link>{' '}
                        Activism{' '}
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
