import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export default function Hero({props}) {
  console.log('hero props:', props)
  return (
    <Carousel controls={false}>
      {props.data.map(item => (
        <Carousel.Item key={item.id}>
          <Image
            className="d-block w-100"
            src={require('/public/images/hero_1.jpeg')}
            alt="First slide"
            width={100}
            height={800}
          />
          <Carousel.Caption>
            <h1>{item.attributes.slideTitle}</h1>
            <p>{item.attributes.slideText}</p>
            <a className='btn btn-outline-light btn-lg' href='#!' role='button'>VIEW MORE</a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
