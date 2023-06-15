import Image from 'next/image';
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { Card, Col, Container, Pagination, Table, Row } from "react-bootstrap";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';

function ContactUs({ heroData }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD_-c6BEBqCGE4XFKJQWuCPQ-GKBRB6Kqk',
  });
  const center = useMemo(() => ({ lat: 37.376140, lng: -118.420620 }), []);

  return (
    <div style={{ color: "#0c5c0a" }}>
      <Image
        className="d-block w-100"
        src={heroData.data[0].attributes.heroImage.data.attributes.url}
        alt="hero"
        width={100}
        height={350}
        loader={loaderProp}
      />
      <div className='container my-5 col-12 col-lg-6'>
        <div className="d-flex justify-content-center">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="d-flex">
          <Col lg={3}>
            <LooksOneIcon
              style={{ fontSize: 100 }}
            ></LooksOneIcon>
          </Col>
          <Col lg={9}>
            <h1>SIGN UP</h1>
            <ul>
              <li>We verify each account to ensure you are in full compliance with state laws.</li>
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
              <li>All prices include a 17% state tax and 3% city tax</li>
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
              <li>lorem ipsum random texts to fill in space</li>
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
  const [navResponse, logoResponse, heroResponse] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/heroes?populate=*`
    )
  ]);
  const [navData, logoData, heroData] = await Promise.all([
    navResponse.json(),
    logoResponse.json(),
    heroResponse.json()
  ])
  return { props: { navData, logoData, heroData } };
}

export default ContactUs
