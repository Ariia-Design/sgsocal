import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from '@/styles/Home.module.css';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import ProductCards from '@/components/ProductCards';
import Footer from '@/components/Footer';
import CardsInfo from '@/components/CardsInfo';
import CategoryCards from '@/components/CategoryCards';

const inter = Inter({ subsets: ['latin'] })

function Home({ navData, newProductsData, heroData, categoryData }) {
  return (
    <>
      <NavBar props={navData} />
      <Row className="mb-11">
        <Hero props={heroData}/>
      </Row>
      <Row className="mb-11">
        <CategoryCards props={categoryData}/>
      </Row>
      <Container>
        <Row className="mb-11">
          <AboutUs />
        </Row>
        <Row className="mb-11">
          <CardsInfo />
        </Row>
        <Row className="mb-11">
          <ProductCards props={newProductsData}/>
        </Row>
      </Container>
      <Footer/>
    </>
  )
}
export async function getServerSideProps(context) {
  const [navResponse, newProductsResponse, heroResponse, categoriesResponse] = await Promise.all([
    fetch('http://127.0.0.1:1337/api/nav-items'),
    fetch('http://127.0.0.1:1337/api/home-page-new-products?populate=*'),
    fetch('http://127.0.0.1:1337/api/home-page-heroes?populate=*'),
    fetch('http://127.0.0.1:1337/api/home-page-categories?populate=*')

  ])
  const [navData, newProductsData, heroData, categoryData] = await Promise.all([
    navResponse.json(),
    newProductsResponse.json(),
    heroResponse.json(),
    categoriesResponse.json()
  ])
  return { props: {navData, newProductsData, heroData, categoryData } };
}

export default Home;
