import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';

export default function About({props}) {
  return  (
    <div className="d-block d-xl-flex justify-content-center align-items-center">
        <Col className="mb-4 mb-xl-0">
          <h1>{props.data[0].attributes.aboutUsTitle}</h1>
          <p>{props.data[0].attributes.aboutUsText}</p>
          <a className='btn btn-outline-dark btn-md' href="#about-us">VIEW MORE</a>
        </Col>
        <Col>
          <Image
          className="d-block w-100"
          src={props.data[0].attributes.aboutUsImage.data.attributes.url}
          alt="about-us"
          width={400}
          height={400}
          objectFit="contain"
          />
        </Col>
    </div>
  )
}
