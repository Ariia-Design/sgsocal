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
                <MDBCardTitle>{newProductItemData.attributes.name}</MDBCardTitle>
                <MDBCardText className='text-muted'>${newProductItemData.attributes.newProductsPrice}</MDBCardText>
              </MDBCardBody>
              <Link href='/contact-us'>
                <MDBBtn
                  className='me-1'
                  style={{
                    marginLeft: '1rem',
                    marginTop: '2rem',
                    color: 'white',
                    backgroundColor: '#0c5c0a',
                    borderColor: '#0c5c0a'
                  }}
                  size='md'>
                  Place Order
                </MDBBtn>
              </Link>
            </MDBCol>
            <MDBCol>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const [newProductItemResponse, navResponse, logoResponse, categoriesResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-new-products/?slug=${slug}&populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`)
  ]);

  const [newProductItemData, navData, logoData, categoryData] = await Promise.all([
    newProductItemResponse.json(),
    navResponse.json(),
    logoResponse.json(),
    categoriesResponse.json()
  ])

  const selectedNewItem = newProductItemData.data.find(item => item.attributes.slug === slug);

  return {
    props: {
      newProductItemData: selectedNewItem,
      navData: navData,
      logoData: logoData,
      categoryData: categoryData
    }
  };
}

export default ProductDetails
