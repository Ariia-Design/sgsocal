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

function ProductDetails({ weeklyDealsProductItemData }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <Container className="d-flex justify-content-center my-5">
        <MDBCard>
          <MDBRow>
            <MDBCol md='6 text-center'>
              <MDBCardImage src={weeklyDealsProductItemData?.attributes?.productImage?.data?.attributes?.url} width={400} quality={100} alt='product' fluid />
            </MDBCol>
            <MDBCol md='6 text-sm-left'>
              <MDBCardBody>
                <MDBCardTitle>{weeklyDealsProductItemData?.attributes?.name}</MDBCardTitle>
                <MDBCardText className='text-muted' style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>${weeklyDealsProductItemData?.attributes?.discountPrice}</MDBCardText>
                <MDBCardText className='text-muted'>${weeklyDealsProductItemData?.attributes?.originalPrice}</MDBCardText>
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

  const [weeklyDealsProductItemResponse, navResponse, logoResponse, categoriesResponse, footerResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/weekly-deals-products?populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer-items`)
  ]);

  const [weeklyDealsProductItemData, navData, logoData, categoryData, footerData] = await Promise.all([
    weeklyDealsProductItemResponse.json(),
    navResponse.json(),
    logoResponse.json(),
    categoriesResponse.json(),
    footerResponse.json()
  ])

  const selectedItem = weeklyDealsProductItemData?.data?.find(item => item.attributes.slug === slug);

  return {
    props: {
      weeklyDealsProductItemData: selectedItem,
      navData: navData,
      logoData: logoData,
      categoryData: categoryData,
      footerData: footerData
    }
  };
}

export default ProductDetails
