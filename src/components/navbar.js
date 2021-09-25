import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import BrainscanLogo from '../assets/brainscanlogo.svg';
import "../assets/css/main.css";

export default function BrainscanNav() {
    return (
        <Navbar bg="rgba(255, 165, 0, 0.73)" fixed="top" expand="true" variant="dark">
            <Container style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                <Navbar.Brand href="#home">
                    <BrainscanLogo width="75%" height="75%" />
                </Navbar.Brand>
                <Nav className="me-auto" style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginRight: "2.5%"}}>
                    <Nav.Link style={{color: "black", textAlign: "right"}}>
                        Visual Arts
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
