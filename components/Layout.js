import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Layout({ children, props }) {
  const navBarData = {};
  navBarData.navData = props.navData;
  navBarData.logoData = props.logoData;

  const footerData = {};
  footerData.navData = props.navData;
  footerData.logoData = props.logoData;
  footerData.categoryData = props.categoryData;

  return (
    <div style={{  minHeight: "100vh", display: "flex", flexDirection: "column"}}>
      <Navbar props={navBarData}/>
      <main style={{flexGrow: 1}}>{children}</main>
      <Footer props={footerData} style={{marginTop: "auto"}}/>
    </div>
  )
}
