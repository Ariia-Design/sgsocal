import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
const api_url = "http://localhost:1337"

export default function Hero({props}) {
  console.log('hero props:', props)
  const loaderProp = ({ src }) => {
    return src;
  }
  return (
    <Carousel controls={false}>
      {props.data.map(item => (
        <Carousel.Item key={item.id}>
          <Image
            className="d-block w-100"
            src={api_url + item.attributes.slideImage.data[0].attributes.url}
            alt="hero"
            width={100}
            height={800}
            loader={loaderProp}
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
