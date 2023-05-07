import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from "react-bootstrap/Col";
import React, { useState, useEffect } from 'react';
import { ModalBody } from 'react-bootstrap';

export default function Layout({ children, props }) {
  console.log(props.logoData.data.attributes.logoImage.data.attributes.url)
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navBarData = {};
  navBarData.navData = props.navData;
  navBarData.logoData = props.logoData;

  const footerData = {};
  footerData.navData = props.navData;
  footerData.logoData = props.logoData;
  footerData.categoryData = props.categoryData;
  footerData.footerData = props.footerData;

  return (
    <>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar props={navBarData} />
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer props={footerData} style={{ marginTop: "auto" }} />
      </div>
      {isLoading ?
        <Modal
          show={show}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header className="d-flex justify-content-center">
            <div className="d-block">
              <Modal.Title>Age Verification</Modal.Title>
            </div>
          </Modal.Header>
          <Modal.Body className="text-center">
            You must be <b>21</b> years or older to enter.
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Col>
              <button className='btn btn-outline-dark btn-md w-100' onClick={handleClose}>
                Enter
              </button>
            </Col>
            <Col>
              <Button className="w-100" variant="danger">Cancel</Button>
            </Col>
          </Modal.Footer>
        </Modal>
        : null
      }
    </>
  )
}
