import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';

// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useMemo } from "react";
function ContactUs({navData}) {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: 'AIzaSyAFF_uSplYR9mnmhHF0nzW49c0OsaVhsz8',
  // });
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <>
      <NavBar props={navData}/>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <Image
          className="d-block w-100"
          src={require('/public/images/test_photo_1.jpeg')}
          alt="First slide"
          width={100}
          height={400}
          />
        </Col>
        <Col>
          <h1>Opening Hours</h1>
          <ul class="list-group list-group-light">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
          </ul>
          <a className='btn btn-outline-dark btn-md' href="#about-us">VIEW MORE</a>
        </Col>
    </Row>
        {/* <div className="App">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={10}
          />
        )}
      </div> */}
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const [navResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
  ]);
  const [navData] = await Promise.all([
    navResponse.json()
  ])
  return { props: { navData } };
}

export default ContactUs
