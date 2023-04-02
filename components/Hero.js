import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export default function Hero() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={require('/public/images/hero_1.jpeg')}
          alt="First slide"
          width={100}
          height={800}
        />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className='btn btn-outline-light btn-lg' href='#!' role='button'>VIEW MORE</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={require('/public/images/hero_2.jpeg')}
          alt="Second slide"
          width={100}
          height={800}
        />
        <Carousel.Caption>
          <h1>Second slide label</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <a className='btn btn-outline-light btn-lg' href='#!' role='button'>VIEW MORE</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={require('/public/images/hero_3.webp')}
          alt="Third slide"
          width={100}
          height={800}
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          <a className='btn btn-outline-light btn-lg' href='#!' role='button'>VIEW MORE</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
