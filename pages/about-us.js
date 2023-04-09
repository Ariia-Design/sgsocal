import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

function AboutUs({navData}) {
  return (
    <>
      <NavBar props={navData}/>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const [navResponse] = await Promise.all([
    fetch('http://127.0.0.1:1337/api/nav-items')
  ])
  const [navData] = await Promise.all([
    navResponse.json()
  ])
  return { props: { navData } };
}

export default AboutUs
