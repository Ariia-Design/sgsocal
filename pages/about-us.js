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
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
  ]);
  const [navData] = await Promise.all([
    navResponse.json()
  ])
  return { props: { navData } };
}

export default AboutUs
