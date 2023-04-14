import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import Image from "next/image";
import { useMemo } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function ContactUs({ navData }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyD_-c6BEBqCGE4XFKJQWuCPQ-GKBRB6Kqk",
  });
  const center = useMemo(() => ({ lat: 37.37614, lng: -118.42062 }), []);

  return (
    <>
      <NavBar props={navData} />
      <div className="my-5 container">
        <Row className="d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row gx-5">
          <div className="col">
            <Image
              className="d-block w-100"
              src={"/images/contact-img.jpg"}
              alt="First slide"
              layout="responsive"
            />
          </div>
          <Col>
            <h1 className="display-6 pb-4">Opening Hours</h1>

            <div className="position-relative d-inline-block w-100 align-top">
              <div className="d-flex align-items-baseline mb-3">
                <p className="position-relative m-0 text-capitalize">Monday</p>
                <div className="flex-grow-1 mx-2 border-bottom border-secondary opacity-50"></div>
                <p className="font-family-Prompt, sans-serif m-0">10am - 8pm</p>
              </div>
              <div className="d-flex align-items-baseline mb-3">
                <p className="position-relative m-0 text-capitalize">Tuesday</p>
                <div className="flex-grow-1 mx-2 border-bottom border-secondary opacity-50"></div>
                <p className="font-family-Prompt, sans-serif m-0">10am - 8pm</p>
              </div>
              <div className="d-flex align-items-baseline mb-3">
                <p className="position-relative m-0 text-capitalize">
                  Wednesday
                </p>
                <div className="flex-grow-1 mx-2 border-bottom border-secondary opacity-50"></div>
                <p className="font-family-Prompt, sans-serif m-0">10am - 8pm</p>
              </div>
              <div className="d-flex align-items-baseline mb-3">
                <p className="position-relative m-0 text-capitalize">
                  Thursday
                </p>
                <div className="flex-grow-1 mx-2 border-bottom border-secondary opacity-50"></div>
                <p className="font-family-Prompt, sans-serif m-0">10am - 8pm</p>
              </div>
              <div className="d-flex align-items-baseline mb-3">
                <p className="position-relative m-0 text-capitalize">Friday</p>
                <div className="flex-grow-1 mx-2 border-bottom border-secondary opacity-50"></div>
                <p className="font-family-Prompt, sans-serif m-0">10am - 8pm</p>
              </div>
              <div className="d-flex align-items-baseline mb-3">
                <p className="position-relative m-0 text-capitalize">
                  Saturday
                </p>
                <div className="flex-grow-1 mx-2 border-bottom border-secondary opacity-50"></div>
                <p className="font-family-Prompt, sans-serif m-0">10am - 8pm</p>
              </div>
              <div className="d-flex align-items-baseline mb-3">
                <p className="position-relative m-0 text-capitalize">Sunday</p>
                <div className="flex-grow-1 mx-2 border-bottom border-secondary opacity-50"></div>
                <p className="font-family-Prompt, sans-serif m-0">10am - 8pm</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container border-top"></div>
      <div className="container my-5">
        <div className="App">
          {!isLoaded ? (
            <h1>Loading...</h1>
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            >
              <Marker position={{ lat: 37.37614, lng: -118.42062 }} />
            </GoogleMap>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const [navResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
  ]);
  const [navData] = await Promise.all([navResponse.json()]);
  return { props: { navData } };
}

export default ContactUs;
