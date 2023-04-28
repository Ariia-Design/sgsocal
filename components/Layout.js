import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Layout({ children, props }) {
  const footerData = {};
  footerData.navData = props.navData;
  footerData.categoryData = props.categoryData;

  return (
    <>
      <Navbar props={props.navData}/>
      <main>{children}</main>
      <Footer props={footerData}/>
    </>
  )
}
