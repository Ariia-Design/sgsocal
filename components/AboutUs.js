import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';

export default function About() {
  return  (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
          <Col>
            <h1>Cannabis products & why to try them</h1>
            <p>Lorem ipsum dolor sit amet, for consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <a className='btn btn-outline-dark btn-md' href="#about-us">VIEW MORE</a>
          </Col>
          <Col>
            <Image
            className="d-block w-100"
            src={require('/public/images/hero_1.jpeg')}
            alt="First slide"
            width={100}
            height={300}
            />
          </Col>
      </Row>
    </Container>
  )
}
