import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import AboutUs from '@/components/AboutUs'
import ProductCards from '@/components/ProductCards'
import Footer from '@/components/Footer'
import CardsInfo from '@/components/CardsInfo'
import Stack from 'react-bootstrap/Stack';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
      <Stack gap={5}>
          <Hero />
          <ProductCards />
          <AboutUs />
          <CardsInfo />
          <Footer />
      </Stack>
    </>
  )
}
