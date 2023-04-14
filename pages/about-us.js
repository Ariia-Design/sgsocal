import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

function AboutUs({navData}) {
  const loaderProp = ({ src }) => {
    return src;
  };
  return (
    <>
      <NavBar props={navData}/>
        <div className='position-relative mb-8'>

          <Image
            className="d-block w-100"
            src={require('/public/images/services-title-bg-img.jpg')}
            alt="First slide"
            width='a'
            height={500}
            loader={loaderProp}

          />
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <h1 className="my-0 text-white display-1">About Us</h1>
          </div>
        </div>
        <div className='container'>
          <Row className='flex-column flex-lg-row mb-6'>
            <Col className='mb-sm-4'>
              <p className='display-6 fw-medium'>
                Volumus molesties ebeam quod has auto antiopam is tractatos cbd.
              </p>
            </Col>
            <Col className='fs-5 fw-light mb-sm-4'>
              <p>
                Amet, for consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor magna aliquyam eratimo volumus molestie ea eam, ut has autem antiopam tractatos.
              </p>
              <p>
                luptatum mediocrem cum euc. In vel nemore euripidis, pro quis elitr vivendum te, sed te ubique euismod facilis. Labitur intellegat ado lescens ad eum, omnium veritus reprehend unt.
              </p>
            </Col>
            <Col className='fs-5 fw-light mb-sm-4'>
              <p>
                Amet, for consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor magna aliquyam eratimo volumus molestie ea eam, ut has autem antiopam tractatos.
              </p>
            </Col>
        </Row>
        <Row className='flex-column flex-lg-row'>
            <Col className='mb-sm-5'>
            <Image
            className="d-block w-100"
            src={require('/public/images/tree.png')}
            alt="First slide"
            width='a'
            height={500}
            loader={loaderProp}

          />
            </Col>
            <Col className='mb-sm-5'>
            <Image
            className="d-block w-100"
            src={require('/public/images/doc.jpeg')}
            alt="First slide"
            width='a'
            height={500}
            loader={loaderProp}

          />
            </Col>
            <Col className='mb-sm-5'>
            <Image
            className="d-block w-100"
            src={require('/public/images/oil.jpeg')}
            alt="First slide"
            width='a'
            height={500}
            loader={loaderProp}

          />
            </Col>
        </Row>
        <Row className='flex-column flex-lg-row mb-6'>
            <Col className='mb-sm-4'>
              
            </Col>
            <Col className='fs-5 fw-light mb-sm-4'>
              <p>
                Amet, for consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor magna aliquyam eratimo volumus molestie ea eam, ut has autem antiopam tractatos.
              </p>
              <p>
                luptatum mediocrem cum euc. In vel nemore euripidis, pro quis elitr vivendum te, sed te ubique euismod facilis. Labitur intellegat ado lescens ad eum, omnium veritus reprehend unt.
              </p>
            </Col>
            <Col className='fs-5 fw-light mb-sm-4'>
              <p>
                Amet, for consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolor magna aliquyam eratimo volumus molestie ea eam, ut has autem antiopam tractatos.
              </p>
            </Col>
        </Row>
        </div>
        <Row>
        <Marquee
          speed={80}
          style=
          {{
            color: 'green',
            fontSize: '3rem',
            fontFamily: 'Italiana',
            fontWeight: '200'
          }}
        >
          I can be a React component, multiple React components, or just some text.
        </Marquee>
        </Row>
        <Row className='flex-column flex-lg-row mx-3'>
            <Col className='mb-sm-5'>
            <Image
            className="d-block w-100"
            src={require('/public/images/tree.png')}
            alt="First slide"
            width='a'
            height={300}
            loader={loaderProp}

          />
            </Col>
            <Col className='mb-sm-5'>
            <Image
            className="d-block w-100"
            src={require('/public/images/doc.jpeg')}
            alt="First slide"
            width='a'
            height={300}
            loader={loaderProp}

          />
            </Col>
            <Col className='mb-sm-5'>
            <Image
            className="d-block w-100"
            src={require('/public/images/oil.jpeg')}
            alt="First slide"
            width='a'
            height={300}
            loader={loaderProp}

          />
            </Col>
            <Col className='mb-sm-5'>
            <Image
            className="d-block w-100"
            src={require('/public/images/tree.png')}
            alt="First slide"
            width='a'
            height={300}
            loader={loaderProp}

          />
            </Col>
            <Col className='mb-sm-5'>
            <Image
            className="d-block w-100"
            src={require('/public/images/doc.jpeg')}
            alt="First slide"
            width='a'
            height={300}
            loader={loaderProp}

          />
            </Col>
        </Row>
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

export default AboutUs
