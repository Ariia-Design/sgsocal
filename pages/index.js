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

function Home({ navItems }) {
  console.log('navItems index.js:', navItems);
  return (
    <>
      <NavBar props={navItems} />
      <Row className="mb-11">
        <Hero />
      </Row>
      <Row className="mb-11">
        <CategoryCards />
      </Row>
      <Container>
        <Row className="mb-11">
          <AboutUs />
        </Row>
        <Row className="mb-11">
          <CardsInfo />
        </Row>
        <Row className="mb-11">
          <ProductCards />
        </Row>
      </Container>
      <Footer/>
    </>
  )
}
export async function getServerSideProps(context) {
  const response = await fetch('http://127.0.0.1:1337/api/nav-items')
  const data = await response.json()
  return {
    props: {navItems: data}
  };
}

export default Home;