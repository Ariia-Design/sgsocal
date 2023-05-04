import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";

function ContactUs() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyD_-c6BEBqCGE4XFKJQWuCPQ-GKBRB6Kqk',
  });
  const center = useMemo(() => ({ lat: 37.376140, lng: -118.420620 }), []);

  return (
    <>
      <div className='my-5 container'>
        <Row className="d-flex justify-content-center align-items-center flex-column-reverse flex-lg-row gx-5">
            <div className='col'>
              <Image
              className="d-block w-100"
              src={require('/public/images/contact-img.jpg')}
              alt="First slide"
              layout='responsive'
              />
            </div>
            <Col>
            <h1 className="display-6 pb-4">Opening Hours</h1>
              <div className="position-relative d-inline-block w-100 align-top">
                <div className="d-flex align-items-baseline mb-3">
                  <p className='position-relative m-0 text-capitalize'>Monday</p>
                  <div className='flex-grow-1 mx-2 border-bottom border-secondary opacity-50'></div>
                  <p className='font-family-Prompt, sans-serif m-0'>10am - 8pm</p>
                </div>
                <div className="d-flex align-items-baseline mb-3">
                  <p className='position-relative m-0 text-capitalize'>Tuesday</p>
                  <div className='flex-grow-1 mx-2 border-bottom border-secondary opacity-50'></div>
                  <p className='font-family-Prompt, sans-serif m-0'>10am - 8pm</p>
                </div>
                <div className="d-flex align-items-baseline mb-3">
                  <p className='position-relative m-0 text-capitalize'>Wednesday</p>
                  <div className='flex-grow-1 mx-2 border-bottom border-secondary opacity-50'></div>
                  <p className='font-family-Prompt, sans-serif m-0'>10am - 8pm</p>
                </div>
                <div className="d-flex align-items-baseline mb-3">
                  <p className='position-relative m-0 text-capitalize'>Thursday</p>
                  <div className='flex-grow-1 mx-2 border-bottom border-secondary opacity-50'></div>
                  <p className='font-family-Prompt, sans-serif m-0'>10am - 8pm</p>
                </div>
                <div className="d-flex align-items-baseline mb-3">
                  <p className='position-relative m-0 text-capitalize'>Friday</p>
                  <div className='flex-grow-1 mx-2 border-bottom border-secondary opacity-50'></div>
                  <p className='font-family-Prompt, sans-serif m-0'>10am - 8pm</p>
                </div>
                <div className="d-flex align-items-baseline mb-3">
                  <p className='position-relative m-0 text-capitalize'>Saturday</p>
                  <div className='flex-grow-1 mx-2 border-bottom border-secondary opacity-50'></div>
                  <p className='font-family-Prompt, sans-serif m-0'>10am - 8pm</p>
                </div>
                <div className="d-flex align-items-baseline mb-3">
                  <p className='position-relative m-0 text-capitalize'>Sunday</p>
                  <div className='flex-grow-1 mx-2 border-bottom border-secondary opacity-50'></div>
                  <p className='font-family-Prompt, sans-serif m-0'>10am - 8pm</p>
                </div>
              </div>
            </Col>
        </Row>
      </div>
      <div className='container border-top'></div>
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
    </>
  )
}

export async function getServerSideProps(context) {
  const [navResponse, categoriesResponse, logoResponse] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
    )
  ]);
  const [navData, categoryData, logoData] = await Promise.all([
    navResponse.json(),
    categoriesResponse.json(),
    logoResponse.json()
  ])
  return { props: { navData, categoryData, logoData } };
}

export default ContactUs
