import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '../components/Footer'
<<<<<<< HEAD
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'

=======
import NavCmp from '@/components/Nav'
>>>>>>> 756c0730c44225ad57ccc7494d7272ea220ea636
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
<<<<<<< HEAD
      <NavBar />
      <Hero />
      <Footer />
=======
    <NavCmp />
     <Footer />
>>>>>>> 756c0730c44225ad57ccc7494d7272ea220ea636
    </>
  )
}
