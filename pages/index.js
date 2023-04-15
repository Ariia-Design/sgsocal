import AboutUs from "@/components/AboutUs";
import CardsInfo from "@/components/CardsInfo";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import ProductCards from "@/components/ProductCards";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inter } from "next/font/google";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const inter = Inter({ subsets: ["latin"] });

function Home({ navData, newProductsData, heroData, categoryData, logoData }) {
  return (
    <>
      <NavBar props={navData} />
      <Row className="mb-11">
        <Hero props={heroData} />
      </Row>
      <Row className="mb-11">
        <CategoryCards props={categoryData} />
      </Row>
      <Container>
        <Row className="mb-11">
          <AboutUs />
        </Row>
        <Row className="mb-11">
          <CardsInfo />
        </Row>
        <Row className="mb-11">
          <ProductCards props={newProductsData} />
        </Row>
      </Container>
      <Footer />
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
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo`
      ),
    ]);
  const [navData, newProductsData, heroData, categoryData, logoData] = await Promise.all([
    navResponse.json(),
    newProductsResponse.json(),
    heroResponse.json(),
    categoriesResponse.json(),
    logoResponse.json(),
  ]);
  return { props: { navData, newProductsData, heroData, categoryData, logoData } };
}

export default Home;
