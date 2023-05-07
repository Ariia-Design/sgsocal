import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Container } from 'react-bootstrap';
import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import Image from 'react-bootstrap';
import Link from 'next/link'

function ProductDetails({ newProductItemData }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <Container className="d-flex justify-content-center my-5">
        <MDBCard>
          <MDBRow>
            <MDBCol md='6 text-center'>
              <MDBCardImage src={newProductItemData.attributes.newProductsImage.data[0].attributes.url} width={400} quality={100} alt='product' fluid />
            </MDBCol>
            <MDBCol md='6 text-sm-left'>
              <MDBCardBody>
                <MDBCardTitle>{newProductItemData.attributes.newProductsTitle}</MDBCardTitle>
                <MDBCardText className='text-muted'>${newProductItemData.attributes.newProductsPrice}</MDBCardText>
                <Link href='/contact-us'>
                  <MDBBtn
                    className='btn btn-light btn-outline-dark me-1'
                    size='md'>
                    Place Order
                  </MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const [newProductItemResponse, navResponse, logoResponse, categoriesResponse, footerResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-new-products/?slug=${slug}&populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer-items`)
  ]);

  const [newProductItemData, navData, logoData, categoryData, footerData] = await Promise.all([
    newProductItemResponse.json(),
    navResponse.json(),
    logoResponse.json(),
    categoriesResponse.json(),
    footerResponse.json()
  ])

  const selectedNewItem = newProductItemData.data.find(item => item.attributes.slug === slug);

  return {
    props: {
      newProductItemData: selectedNewItem,
      navData: navData,
      logoData: logoData,
      categoryData: categoryData,
      footerData: footerData
    }
  };
}

export default ProductDetails
