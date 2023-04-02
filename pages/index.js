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
// import Stack from 'react-bootstrap/Stack';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
      <Row className="mb-11">
        <Hero />
      </Row>
      <Row className="mb-11">
        <CategoryCards />
      </Row>
      <Container>
        <Row className="mb-8">
          <AboutUs />
        </Row>
        <Row className="mb-8">
          <CardsInfo />
        </Row>
        <Row className="mb-8">
          <ProductCards />
        </Row>
      </Container>
      <Footer/>
    </>
  )
}
