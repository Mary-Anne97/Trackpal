import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import HeroImage from '../../images/hero.png';
import './Hero.css';

function Header() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        // add a class to the div to make it responsive
        <div className="Hero xs:max-sm:flex-col py-10" id="Hero">
            {/* White a layout that has hero text at left and hero image at right */}
            <div className="Hero-text flex-1 py-5">
                <h1 className="text-4xl font-bold text-main-0">A Friend That Cares About Your Work-Health Balance</h1>
                <p className="text-xl font-bold text-main-80 py-10 ">Your tracking pal</p>
                <div className='xs:max-sm:m-auto  xs:max-sm:py-5'>
                    <button className="bg-main-100 text-white px-4 py-2 font-bold rounded join-us" onClick={handleShow}>Join Us</button>
                    <button className="bg-white text-main-100 px-4 py-2 border-main rounded font-bold learn-more">Learn More</button>
                </div>
            </div>
            <div className="Hero-image flex-1 text-center py-5">
                <img src={HeroImage} alt="hero_image" className='m-auto Hero-Image' />
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Good Choice!!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Password again" />
                        </Form.Group>
                        <Button variant="primary" className="bg-purple" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="bg-red" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" className="bg-purple" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Header;

