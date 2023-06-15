import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import React from 'react';

function ContactUs({ heroData }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <div className="text-center" style={{ color: "#0c5c0a" }}>
      <Row>
        <Image
          className="d-block w-100"
          src={heroData.data[0].attributes.heroImage.data.attributes.url}
          alt="hero"
          width={100}
          height={350}
          loader={loaderProp}
        />
      </Row>
      <Row className="py-5">
        <Row>
          <h1>Hours</h1>
          <h3>8-10am</h3>
        </Row>
        <Row>
          <h1>Call or text us</h1>
          <h3>(100)100-1000</h3>
        </Row>
        <Row>
          <h1>General questions / Customer support</h1>
          <h3>put@youremail.com</h3>
        </Row>
        <Row>
          <h1>Press</h1>
          <h3>put@youremail.com</h3>
        </Row>
        <Row>
          <h1>Partnerships</h1>
          <h3>put@youremail.com</h3>
        </Row>
        <Row>
          <a><h1>Facebook</h1></a>
        </Row>
        <Row>
          <a><h1>Instagram</h1></a>
        </Row>
        <Row>
          <a><h1>Leafly</h1></a>
        </Row>
        <Row>
          <a><h1>Weedmaps</h1></a>
        </Row>
      </Row>
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
