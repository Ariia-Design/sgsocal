// import Carousel from 'react-bootstrap/Carousel';
// import Image from 'next/image';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from 'react-bootstrap/Card';

// export default function Hero() {
//   return (
//     <Carousel controls={false} show={3}>
//       {/* <Carousel.Item>
//         <Row>
//           <Col>
//             <Card>
//               <Card.Title>
//                 FLOWERS
//               </Card.Title>
//             </Card>
//           </Col>
//           <Col>
//             <Card>
//               <Card.Title>
//                 PRE-ROLLS
//               </Card.Title>
//             </Card>
//           </Col>
//           <Col>
//             <Card>
//               <Card.Title>
//                 VAPORIZERS
//               </Card.Title>
//             </Card>
//           </Col>
//         </Row>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Row>
//           <Col>
//             <Card>
//               <Card.Title>
//                 CONCENTRATES
//               </Card.Title>
//             </Card>
//           </Col>
//           <Col>
//             <Card>
//               <Card.Title>
//                 TINCTURES
//               </Card.Title>
//             </Card>
//           </Col>
//           <Col>
//             <Card>
//               <Card.Title>
//                 TOPICALS
//               </Card.Title>
//             </Card>
//           </Col>
//         </Row>
//       </Carousel.Item> */}
//       <Carousel.Item>
//         <Card>
//           <Card.Title>
//             Flowers
//           </Card.Title>
//         </Card>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Card>
//           <Card.Title>
//             Flowers
//           </Card.Title>
//         </Card>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Card>
//           <Card.Title>
//             Flowers
//           </Card.Title>
//         </Card>
//       </Carousel.Item>
//             <Carousel.Item>
//         <Card>
//           <Card.Title>
//             Flowers
//           </Card.Title>
//         </Card>
//       </Carousel.Item>
//     </Carousel>
//   );
// }
import Carousel from "react-multi-carousel";
import Card from 'react-bootstrap/Card';
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
  )
}
