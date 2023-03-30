import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Footer from '../components/Footer'
<<<<<<< HEAD
import NavCmp from '@/components/Nav'
=======
import NavBar from '@/components/NavBar'
>>>>>>> 603302885354594b1e19492495e92644b76bf1aa
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
<<<<<<< HEAD
    <NavCmp />
=======
    <NavBar />
>>>>>>> 603302885354594b1e19492495e92644b76bf1aa
     <Footer />
    </>
  )
}
