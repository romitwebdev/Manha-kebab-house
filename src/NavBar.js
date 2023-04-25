import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand className="brand_name">
                        <img
                            src="logo.jpg"
                            alt=""
                            width="50px"
                            height="50px"
                            className="rounded-5 border border-3 border-warning me-2 d-inline-block"
                        />
                        <p className="brand_title">Manha Kebab House</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-nav-bar"></Navbar.Toggle>
                    <Navbar.Collapse
                        id="basic-nav-bar"
                        className="justify-content-end"
                    >
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#menus">Menus</Nav.Link>
                        </Nav>
                        <Navbar.Text className="ms-2">
                            <a href="tel:+351920106378">
                                Call us: +351 920106378
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;
