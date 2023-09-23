import Image from 'next/image';
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

function ContactUs({ heroData, howItWorksData }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD_-c6BEBqCGE4XFKJQWuCPQ-GKBRB6Kqk',
  });
  const center = useMemo(() => ({ lat: 33.83653, lng: -117.91759 }), []);

  return (
    <div style={{ color: "#0c5c0a" }}>
      <div className="heroImage-container">
        <Image
          className="d-block w-100"
          src={heroData.data.attributes.heroImage.data.attributes.url}
          alt="hero"
          fill
          style={{ objectFit: "cover" }}
          loader={loaderProp}
        />
      </div>
      <Container className='my-5 col-12 col-lg-6'>
        <Row>
          <p>{howItWorksData.data[0].attributes.description}</p>
        </Row>
        <Row>
          <Col xs={4} sm={3}>
            <LooksOneIcon
              style={{ fontSize: 100 }}
            ></LooksOneIcon>
          </Col>
          <Col xs={8} sm={9}>
            <h1>{howItWorksData.data[0].attributes.stepOneHeader}</h1>
            <ul>
              <li>Click <a target="_blank" href="https://form.jotform.com/231304984223149" style={{ fontWeight: "bold" }}>HERE</a> to sign up before placing your first order to verify your age</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col xs={4} sm={3}>
            <LooksTwoIcon
              style={{ fontSize: 100 }}
            ></LooksTwoIcon>
          </Col>
          <Col xs={8} sm={9}>
            <h1>PLACE AN ORDER</h1>
            <ul>
              <li>{howItWorksData.data[0].attributes.stepTwoBulletOne}</li>
              <li>{howItWorksData.data[0].attributes.stepTwoBulletTwo}</li>
              <li>{howItWorksData.data[0].attributes.stepTwoBulletThree}</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container className='my-5'>
        <div className="App">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            >
              <Marker position={{ lat: 37.376140, lng: -118.420620 }} />
            </GoogleMap>
          )}
        </div>
      </Container>
    </div>
  )
}

export async function getServerSideProps(context) {
  const [navResponse, logoResponse, heroResponse, howItWorksResponse] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/hero?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/how-it-works?populate=*`
    )
  ]);
  const [navData, logoData, heroData, howItWorksData] = await Promise.all([
    navResponse.json(),
    logoResponse.json(),
    heroResponse.json(),
    howItWorksResponse.json()
  ])
  return { props: { navData, logoData, heroData, howItWorksData } };
}

export default ContactUs
