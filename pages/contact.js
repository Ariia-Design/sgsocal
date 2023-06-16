import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import React from 'react';
import Link from "next/link";

function Contact({ heroData, contactData }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <div className="text-center" style={{ color: "#0c5c0a" }}>
      <Row>
        <Image
          className="d-block w-100"
          src={heroData.data.attributes.heroImage.data.attributes.url}
          alt="hero"
          width={100}
          height={350}
          loader={loaderProp}
        />
      </Row>
      <Row className="py-5">
        <h1>Hours</h1>
        <h3>{contactData.data[0].attributes.hours}</h3>
        <h1>Call or text us</h1>
        <h3>{contactData.data[0].attributes.phoneNumber}</h3>
        <h1>General questions / Customer support</h1>
        <h3>{contactData.data[0].attributes.emailOne}</h3>
        <h1>Press</h1>
        <h3>{contactData.data[0].attributes.emailTwo}</h3>
        <h1>Partnerships</h1>
        <h3>{contactData.data[0].attributes.emailThree}</h3>
        <a href={contactData.data[0].attributes.facebookLink} style={{ color: "#0c5c0a" }}><h1>Facebook</h1></a>
        <a href={contactData.data[0].attributes.instagramLink} style={{ color: "#0c5c0a" }}><h1>Instagram</h1></a>
        <a href={contactData.data[0].attributes.leaflyLink} style={{ color: "#0c5c0a" }}><h1>Leafly</h1></a>
        <a href={contactData.data[0].attributes.weedmapsLink} style={{ color: "#0c5c0a" }}><h1>Weedmaps</h1></a>
      </Row>
    </div>
  )
}

export async function getServerSideProps(context) {
  const [navResponse, logoResponse, heroResponse, contactResponse] = await Promise.all([
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
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts`
    )
  ]);
  const [navData, logoData, heroData, contactData] = await Promise.all([
    navResponse.json(),
    logoResponse.json(),
    heroResponse.json(),
    contactResponse.json()
  ])
  return { props: { navData, logoData, heroData, contactData } };
}

export default Contact
