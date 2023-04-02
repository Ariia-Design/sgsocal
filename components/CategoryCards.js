import Carousel from "react-multi-carousel";
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "react-multi-carousel/lib/styles.css";

export default function CategoryCards() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return(
    <Stack gap={4}>
      <h1 className="text-center">Product Categories</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Card>
          <Card.Title>
            <Image
              className="d-block w-100"
              src={require('/public/images/reveur_pods_1.png')}
              alt="reveur_pods_1"
              width={100}
              height={315}
            />
            FLOWERS
          </Card.Title>
        </Card>
        <Card>
          <Card.Title>
            <Image
              className="d-block w-100"
              src={require('/public/images/test_photo_1.jpeg')}
              alt="reveur_pods_1"
              width={100}
              height={315}
            />
            PRE-ROLLS
          </Card.Title>
        </Card>
        <Card>
          <Card.Title>
            <Image
              className="d-block w-100"
              src={require('/public/images/stizzy_pods_1.png')}
              alt="reveur_pods_1"
              width={100}
              height={315}
            />
            VAPORIZERS
          </Card.Title>
        </Card>
        <Card>
          <Card.Title>
            <Image
              className="d-block w-100"
              src={require('/public/images/reveur_pods_1.png')}
              alt="reveur_pods_1"
              width={100}
              height={315}
            />
            CONCENTRATES
          </Card.Title>
        </Card>
      </Carousel>
    </Stack>
  )
}
