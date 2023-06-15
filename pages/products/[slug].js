import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import React from 'react';
import { Card, Col, Container, Pagination, Table, Row } from "react-bootstrap";
import {
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import Image from 'react-bootstrap';
import Link from 'next/link'

function ProductDetails({ productItemData }) {
  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <Container className="d-flex justify-content-center my-5">
        <Card className="p-5">
          <Row className="d-flex align-items-center">
            <Col md={6} className="text-center">
              <MDBCardImage style={{ position: "relative", maxWidth: "100%", maxHeight: "100%" }} src={productItemData?.attributes?.productImage?.data?.attributes?.url} alt='product' objectFit="contain" fill />
              {productItemData.attributes.strainType
                ? <label className="p-2 h7" style={{ position: "absolute", left: 0, top: "25px", backgroundColor: "#0c5c0a", color: "white" }}>{productItemData.attributes.strainType}</label>
                : ""
              }
            </Col>
            <Col md={6} className="text-sm-left">
              <MDBCardBody>
                <MDBCardTitle><h4>{productItemData?.attributes?.name}</h4></MDBCardTitle>
                {
                  productItemData?.attributes?.thcLevel && productItemData?.attributes?.cbdLevel
                    ? <MDBCardTitle><h6>THC: {productItemData?.attributes?.thcLevel} - CBD: {productItemData?.attributes?.cbdLevel}</h6></MDBCardTitle>
                    : ""
                }
                <MDBCardTitle>${productItemData?.attributes?.price}</MDBCardTitle>
                <MDBCardText className='text-muted'>{productItemData?.attributes.productDescription}</MDBCardText>
                <Link href='/how-it-works'>
                  <MDBBtn
                    className='btn btn-light btn-outline-dark me-1'
                    size='md'>
                    Place Order
                  </MDBBtn>
                </Link>
              </MDBCardBody>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const [productItemResponse, navResponse, logoResponse, categoriesResponse, footerResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products/?slug=${slug}&populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/footer-items`)
  ]);

  const [productItemData, navData, logoData, categoryData, footerData] = await Promise.all([
    productItemResponse.json(),
    navResponse.json(),
    logoResponse.json(),
    categoriesResponse.json(),
    footerResponse.json()
  ])

  const selectedItem = productItemData?.data?.find(item => item.attributes.slug === slug);

  return {
    props: {
      productItemData: selectedItem,
      navData: navData,
      logoData: logoData,
      categoryData: categoryData,
      footerData: footerData
    }
  };
}

export default ProductDetails
