import React from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export default function Hero() {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url()", height: 750 }}
      >

        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
