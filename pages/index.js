import AboutUs from "@/components/AboutUs";
import CategoryCards from "@/components/CategoryCards";
import Hero from "@/components/Hero";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import Image from 'next/image';
import { MDBRipple } from 'mdb-react-ui-kit';
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import { Row, Card, Table, Container, Stack } from 'react-bootstrap';

const inter = Inter({ subsets: ["latin"] });

function Home({ navData, newProductsData, heroData, categoryData, logoData }) {
  console.log(logoData)
  return (
    <>
      <Row className="mb-11">
        <Hero props={heroData} />
      </Row>
      <Row className="mb-11">
        <CategoryCards props={categoryData} />
      </Row>
      <div className="d-flex align-items-center mb-11" style={{ backgroundColor: "#F0EFE6", padding: "10rem 0"}}>
        <div className="container">
          <AboutUs />
        </div>
      </div>
      <div className="d-flex align-items-center mb-8">
        <div className="container">
            <Stack gap={4}>
              <h1 className="text-center">Our New Products</h1>
              <Table>
                <tbody>
                  <tr className="d-flex flex-wrap">
                    {
                      newProductsData.data.map(item => (
                        <td key={item.id} className="col-12 col-md-6 col-xl-3">
                          <Card>
                            <MDBRipple
                              className='bg-image hover-overlay shadow-1-strong rounded'
                              rippleTag='div'
                              rippleColor='light'
                              style={{ height: "100%" }}
                            >
                              <Image
                                className="d-block w-100"
                                src={item.attributes.newProductsImage.data[0].attributes.url}
                                alt="hero"
                                width={100}
                                height={315}
                              />
                              <Link href={"/Products"}>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                              </Link>
                              <div className="d-flex align-items-center justify-content-between" style={{ height: "60px" }}>
                                <div className="col-6 product-card-title text-start">
                                <Link href={"/Products"}><h6>{item.attributes.newProductsTitle}</h6></Link>
                                </div>
                                <div className="product-card-price">
                                <Link href={"/Products"}><h5>${item.attributes.newProductsPrice}</h5></Link>
                                </div>
                              </div>
                            </MDBRipple>
                          </Card>
                        </td>
                      ))
                    }
                  </tr>
                </tbody>
              </Table>
            </Stack>
        </div>
      </div>
      <Row className="mb-8">
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
    </>
  );
}
export async function getServerSideProps(context) {
  const [navResponse, newProductsResponse, heroResponse, categoriesResponse, logoResponse] =
    await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-new-products?populate=*`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-heroes?populate=*`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
      ),
    ]);
  const [navData, newProductsData, heroData, categoryData, logoData] = await Promise.all([
    navResponse.json(),
    newProductsResponse.json(),
    heroResponse.json(),
    categoriesResponse.json(),
    logoResponse.json()
  ]);
  return { props: { navData, newProductsData, heroData, categoryData, logoData } };
}

export default Home;
