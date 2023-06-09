function howItWorks() {

}

export async function getServerSideProps(context) {
  const [navResponse, logoResponse, aboutUsResponse] =
    await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/about-us-heroes?populate=*`
      ),
    ]);
  const [navData, logoData, aboutUsData] = await Promise.all([
    navResponse.json(),
    logoResponse.json(),
    aboutUsResponse.json()
  ]);
  return { props: { navData, logoData, aboutUsData } };
}

export default howItWorks;
