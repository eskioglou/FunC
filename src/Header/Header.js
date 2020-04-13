import React from "react";
import {Nav, Navbar, NavDropdown, Button, Col, DropdownButton, DropdownItem} from 'react-bootstrap';

import logo from "./logoTransparent.gif"
import LocalizedStrings from "react-localization";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "reactstrap";
import Row from "react-bootstrap/Row";
import {changeLanguage} from "../actions";

import './Header.css'

const langStrings = new LocalizedStrings({
    en: {
        home: "Home",
        pricing: "Pricing",
        courses: "Courses",
        signIn: "Sign in",
        signUp: "Sign up"
    },
    gr: {
        home: "Αρχική",
        pricing: "Τιμοκατάλογος",
        courses: "Μαθήματα",
        signIn: "Σύνδεση",
        signUp: "Εγγραφή"
    }
});

function Header() {
    const lang = useSelector(state => state.language);
    const dispatch = useDispatch();
    langStrings.setLanguage(lang);
    return (
        <div className="yes">
            <Navbar bg="dark" expand="lg">
                <DropdownButton title={<i className="fas fa-globe"/>} variant="dark" size="lg" id="dropdown-basic">
                    <DropdownItem onClick={() => dispatch(changeLanguage('en'))}>English</DropdownItem>
                    <DropdownItem onClick={() => dispatch(changeLanguage('gr'))}>Ελληνικά</DropdownItem>
                </DropdownButton>
                <Navbar.Brand href="/">
                    <img src={logo} style={{height: "40px"}} alt="Home Page" fluid/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="danger"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container fluid={true}>
                        <Row class="m-auto">
                            <Nav className="mr-1" text="light">
                                <Col xs={0}>
                                    <Button variant="dark" size="lg" className="text-white" href="/">
                                        {langStrings.home}
                                    </Button>
                                </Col>
                                <Col xs={0}>
                                    <Button variant="dark" size="lg" className="text-white" href="/pricing">
                                        {langStrings.pricing}
                                    </Button>
                                </Col>
                                <Col xs={0}>
                                    <DropdownButton
                                        block fluid={true} variant="dark" size="lg"
                                        title={langStrings.courses} id="dropdown-basic">
                                        <NavDropdown.Item href="/cplusplus">C++</NavDropdown.Item>
                                        <NavDropdown.Item href="/java">Java</NavDropdown.Item>
                                        <NavDropdown.Item href="/sql">SQL</NavDropdown.Item>
                                    </DropdownButton>
                                </Col>
                            </Nav>
                        </Row>
                    </Container>
                    <Col>
                        <Button
                            href="/signIn"
                            variant="success"
                            size="lg">
                            {langStrings.signIn}
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            href="/signUp"
                            variant="danger"
                            size="lg">
                            {langStrings.signUp}
                        </Button>
                    </Col>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}

export default Header;