import * as React from "react";
import Logo from '../../images/logo.svg';
import { Button, Form, Modal, Nav, Navbar } from "react-bootstrap";
import './Header.css';


function Header() {

    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About Us",
            path: "#Team"
        },
        {
            name: "Blog",
            path: "#Blog"
        },
        {
            name: "Sign In",
            path: "/"
        },
    ];

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="#">
                    <img src={Logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav >
                        {links.map((link, index) => (
                            <Nav.Link className="px-4" href={link.name === 'Sign In' ? '#' : link.path} key={index} onClick={() => {
                                if (link.name === 'Sign In') {
                                    handleShow();
                                }
                            }}><div className="text-main-0 text-lg font-bold hover:underline">{link.name}</div>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome Back!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="bg-red" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className="bg-purple" onClick={handleClose}>
                        Sign In
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Header;
