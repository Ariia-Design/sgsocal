import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

function AboutUs({ aboutUsData }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <div className="position-relative mb-8">
        <Image
          className="d-block w-100"
          src={aboutUsData.data[0].attributes.aboutUsHero.data.attributes.url}
          alt="about-us"
          width={100}
          height={500}
          objectFit="contain"
          loader={loaderProp}
        />
      </div>
      <div className="container">
        <Row className="flex-column flex-lg-row mb-6">
          <Col className="mb-xs-4">
            <p className="display-6 fw-medium">
              {aboutUsData.data[0].attributes.aboutUsHeader}
            </p>
          </Col>
          <Col className="fs-5 fw-light mb-xs-4">
            <p>
              {aboutUsData.data[0].attributes.aboutUsText1}
            </p>
          </Col>
        </Row>
        <Row className="flex-column flex-lg-row">
          <Col className="pb5">
            <Image
              className="d-block w-100"
              src={aboutUsData.data[0].attributes.aboutUsImage3.data.attributes.url}
              alt="First slide"
              width={500}
              height={500}
              objectFit="contain"
              loader={loaderProp}
            />
          </Col>
          <Col className="pb5">
            <Image
              className="d-block w-100"
              src={aboutUsData.data[0].attributes.aboutUsImages2.data.attributes.url}
              alt="First slide"
              width={500}
              height={500}
              objectFit="contain"
              loader={loaderProp}
            />
          </Col>
          <Col className="pb5">
            <Image
              className="d-block w-100"
              src={aboutUsData.data[0].attributes.aboutUsImages.data[0].attributes.url}
              alt="First slide"
              width={500}
              height={500}
              objectFit="contain"
              loader={loaderProp}
            />
          </Col>
        </Row>
        <Row className="flex-column flex-lg-row mb-6">
          <Col className="mb-sm-4"></Col>
          <Col className="fs-5 fw-light mb-sm-4">
            <p>{aboutUsData.data[0].attributes.aboutUsText2}</p>
          </Col>
        </Row>
      </div>
      <Row>
        <Marquee
          speed={80}
          style={{
            color: "green",
            fontSize: "3rem",
            fontFamily: "Italiana",
            fontWeight: "200",
            marginBottom: "3rem",
          }}
        >
          {aboutUsData.data[0].attributes.aboutUsMarquee}
        </Marquee>
      </Row>
      <Row className="flex-column flex-lg-row mx-3">
        <Col className="pb5">
          <Image
            className="d-block w-100"
            src={aboutUsData.data[0].attributes.aboutUsImage3.data.attributes.url}
            alt="First slide"
            width={500}
            height={300}
            objectFit="contain"
            loader={loaderProp}
          />
        </Col>
        <Col className="pb5">
          <Image
            className="d-block w-100"
            src={aboutUsData.data[0].attributes.aboutUsImages2.data.attributes.url}
            alt="First slide"
            width={500}
            height={300}
            objectFit="contain"
            loader={loaderProp}
          />
        </Col>
        <Col className="pb5">
          <Image
            className="d-block w-100"
            src={aboutUsData.data[0].attributes.aboutUsImages.data[0].attributes.url}
            alt="First slide"
            width={500}
            height={300}
            objectFit="contain"
            loader={loaderProp}
          />
        </Col>
        <Col className="pb5">
          <Image
            className="d-block w-100"
            src={aboutUsData.data[0].attributes.aboutUsImage3.data.attributes.url}
            alt="First slide"
            width={500}
            height={300}
            objectFit="contain"
            loader={loaderProp}
          />
        </Col>
      </Row>
    </>
  );
}

export async function getServerSideProps(context) {
  const [navResponse, categoriesResponse, logoResponse, aboutUsResponse] = await Promise.all([
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
    ),
    fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-us-heroes?populate=*`
    )
  ]);
  const [navData, categoryData, logoData, aboutUsData] = await Promise.all([
    navResponse.json(),
    categoriesResponse.json(),
    logoResponse.json(),
    aboutUsResponse.json()
  ])
  return { props: { navData, categoryData, logoData, aboutUsData } };
}

export default AboutUs
