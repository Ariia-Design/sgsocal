import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import Image from "next/image";
import Router from "next/router";

export default function Footer({ props }) {
  console.log(props.footerData.data[0].attributes)
  const handleClick = (path) => {
    Router.push({
      pathname: "/Products",
      query: { category: path },
    });
  };

  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ backgroundColor: "#F0EFE6" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>
      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <Image
                src={
                  props?.logoData?.data?.attributes?.logoImage?.data?.attributes?.url
                }
                alt="logo"
                width={160}
                height={75}
                objectFit="contain"
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              {props?.categoryData?.data?.length > 0 &&
                props.categoryData?.data?.map((item) => (
                  <div key={item.id} style={{cursor: "pointer"}}>
                    <a
                      className="text-reset"
                      value={item.attributes.categoryUrl}
                      onClick={(e) =>
                        handleClick(e.target.getAttribute("value"))
                      }
                    >
                      {item.attributes.categoryUrl[0].toUpperCase() +
                        item.attributes.categoryUrl.slice(1)}
                    </a>
                  </div>
                ))}
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
              {props?.navData?.data?.length > 0 &&
                props.navData?.data?.map((item) => (
                  <div key={item.id}>
                    <a className="text-reset" href={item.attributes.url}>
                      {item.attributes.Title}
                    </a>
                  </div>
                ))}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-3" />
                  {props.footerData.data[0].attributes.footerAddress}
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  {props.footerData.data[0].attributes.footerEmail}
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" />
                  {props.footerData.data[0].attributes.footerNumber}
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" />
                  {props.footerData.data[0].attributes.footerFax}
                </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div className='text-center text-light p-4' style={{ backgroundColor: '#0c5c0a' }}>
          © 2023 Copyright:&nbsp;
          <a className='text-light fw-bold' href='https://sgsocal.com/'>
              sgsocal.com
          </a>
      </div>
    </MDBFooter>
  );
}
