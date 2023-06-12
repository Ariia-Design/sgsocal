import Image from "next/image";
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import { Card, Col, Container, Pagination, Table, Row } from "react-bootstrap";
import { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function howItWorks({ aboutUsData }) {
  const loaderProp = ({ src }) => {
    return src;
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD_-c6BEBqCGE4XFKJQWuCPQ-GKBRB6Kqk',
  });

  const center = useMemo(() => ({ lat: 37.376140, lng: -118.420620 }), []);

  return(
    <div style={{ color: "#0c5c0a" }}>
      <Image
        className="d-block w-100"
        src={aboutUsData.data[0].attributes.aboutUsHero.data.attributes.url}
        alt="hero"
        width={100}
        height={350}
        loader={loaderProp}
      />
      <Container className="py-5">
        <div className="d-flex justify-content-center">
          <Col xl={7}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </Col>
        </div>
        <div className="d-flex align-items-center">
          <Col className="text-end">
            <LooksOneIcon
              style={{ fontSize: 100 }}
            ></LooksOneIcon>
          </Col>
          <Col xl={7}>
            <h1>SIGN UP</h1>
            <ul>
              <li>We verify each account to ensure you are in full compliance with state laws.</li>
            </ul>
          </Col>
        </div>
        <div className="d-flex align-items-center">
          <Col className="text-end">
            <LooksTwoIcon
              style={{ fontSize: 100 }}
            ></LooksTwoIcon>
          </Col>
          <Col xl={7}>
            <h1>PLACE AN ORDER</h1>
            <ul>
              <li>All prices include a 17% state tax and 3% city tax</li>
            </ul>
          </Col>
        </div>
        <div className="d-flex align-items-center">
          <Col className="text-end">
            <Looks3Icon
              style={{ fontSize: 100 }}
            ></Looks3Icon>
          </Col>
          <Col xl={7}>
            <h1>RELAX</h1>
          </Col>
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
      </Container>
    </div>
  )
}

export async function getServerSideProps(context) {
  const [navResponse, logoResponse, aboutUsResponse] =
    await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-us-heroes?populate=*`
      ),
    ]);
  const [navData, logoData, aboutUsData] = await Promise.all([
    navResponse.json(),
    logoResponse.json(),
    aboutUsResponse.json()
  ]);
  return { props: { navData, logoData, aboutUsData } };
}

export default howItWorks;
