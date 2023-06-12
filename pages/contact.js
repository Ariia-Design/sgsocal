import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

function ContactUs({ contactUsData, aboutUsData }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD_-c6BEBqCGE4XFKJQWuCPQ-GKBRB6Kqk',
  });
  const center = useMemo(() => ({ lat: 37.376140, lng: -118.420620 }), []);

  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <div className="text-center" style={{ color: "#0c5c0a" }}>
      <Row>
        <Image
          className="d-block w-100"
          src={aboutUsData.data[0].attributes.aboutUsHero.data.attributes.url}
          alt="hero"
          width={100}
          height={350}
          loader={loaderProp}
        />
      </Row>
      <Row className="py-5">
        <Row>
          <h2>Hours</h2>
        </Row>
        <Row>
          <h2>Call or text us</h2>
        </Row>
        <Row>
          <h2>General questions / Customer support</h2>
        </Row>
        <Row>
          <h2>Press</h2>
        </Row>
        <Row>
          <h2>Partnerships</h2>
        </Row>
        <Row>
          <h2>Facebook</h2>
        </Row>
        <Row>
          <h2>Instagram</h2>
        </Row>
        <Row>
          <h2>Leafly</h2>
        </Row>
        <Row>
          <h2>Weedmaps</h2>
        </Row>
      </Row>
    </div>
  )
}

export async function getServerSideProps(context) {
  const [navResponse, categoriesResponse, logoResponse, contactUsResponse, footerResponse, aboutUsResponse] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-uses?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer-items`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-us-heroes?populate=*`
    )
  ]);
  const [navData, categoryData, logoData, contactUsData, footerData, aboutUsData] = await Promise.all([
    navResponse.json(),
    categoriesResponse.json(),
    logoResponse.json(),
    contactUsResponse.json(),
    footerResponse.json(),
    aboutUsResponse.json()
  ])
  return { props: { navData, categoryData, logoData, contactUsData, footerData, aboutUsData } };
}

export default ContactUs
