import Image from 'next/image';
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { Card, Col, Container, Pagination, Table, Row } from "react-bootstrap";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

function ContactUs({ heroData, howItWorksData }) {
  console.log(howItWorksData.data[0].attributes.stepOneHeader)
  const loaderProp = ({ src }) => {
    return src;
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD_-c6BEBqCGE4XFKJQWuCPQ-GKBRB6Kqk',
  });
  const center = useMemo(() => ({ lat: 33.83653, lng: -117.91759 }), []);

  return (
    <div style={{ color: "#0c5c0a" }}>
      <Image
        className="d-block w-100"
        src={heroData.data.attributes.heroImage.data.attributes.url}
        alt="hero"
        width={100}
        height={350}
        loader={loaderProp}
      />
      <div className='container my-5 col-12 col-lg-6'>
        <div className="d-flex justify-content-center">
          <p>{howItWorksData.data[0].attributes.description}</p>
        </div>
        <div className="d-flex">
          <Col lg={3}>
            <LooksOneIcon
              style={{ fontSize: 100 }}
            ></LooksOneIcon>
          </Col>
          <Col lg={9}>
            <h1>{howItWorksData.data[0].attributes.stepOneHeader}</h1>
            <ul>
              <li>{howItWorksData.data[0].attributes.stepOneBulletOne}</li>
              <li>{howItWorksData.data[0].attributes.stepOneBulletTwo}</li>
              <li>{howItWorksData.data[0].attributes.stepOneBulletThree}</li>
            </ul>
          </Col>
        </div>
        <div className="d-flex">
          <Col lg={3}>
            <LooksTwoIcon
              style={{ fontSize: 100 }}
            ></LooksTwoIcon>
          </Col>
          <Col lg={9}>
            <h1>PLACE AN ORDER</h1>
            <ul>
              <li>{howItWorksData.data[0].attributes.stepTwoBulletOne}</li>
              <li>{howItWorksData.data[0].attributes.stepTwoBulletTwo}</li>
              <li>{howItWorksData.data[0].attributes.stepTwoBulletThree}</li>
            </ul>
          </Col>
        </div>
        <div className="d-flex">
          <Col lg={3}>
            <Looks3Icon
              style={{ fontSize: 100 }}
            ></Looks3Icon>
          </Col>
          <Col lg={9}>
            <h1>RELAX</h1>
            <ul>
              <li>{howItWorksData.data[0].attributes.stepThreeBulletOne}</li>
              <li>{howItWorksData.data[0].attributes.stepThreeBulletTwo}</li>
              <li>{howItWorksData.data[0].attributes.stepThreeBulletThree}</li>
            </ul>
          </Col>
        </div>
      </div>
      <div className='container my-5'>
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
      </div>
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
