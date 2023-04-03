// import React from "react";
// import NavBar from '@/components/NavBar'
// import Footer from '@/components/Footer'
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// export default function Products() {
//   return (
//     <>
//       <NavBar />
//       <MDBContainer fluid className="my-5">
//         <MDBRow>
//           <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
//             <MDBCard>
//               <div className="d-flex justify-content-between p-3">
//                 <p className="lead mb-0">Combo Offer</p>
//                 <div
//                   className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
//                   style={{ width: "35px", height: "35px" }}
//                 >
//                   <p className="text-white mb-0 small">x4</p>
//                 </div>
//               </div>
//               <MDBCardImage
//                 src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
//                 position="top"
//                 alt="Laptop"
//               />
//               <MDBCardBody>
//                 <div className="d-flex justify-content-between">
//                   <p className="small">
//                     <a href="#!" className="text-muted">
//                       Laptops
//                     </a>
//                   </p>
//                   <p className="small text-danger">
//                     <s>$1099</s>
//                   </p>
//                 </div>

//                 <div className="d-flex justify-content-between mb-3">
//                   <h5 className="mb-0">HP Notebook</h5>
//                   <h5 className="text-dark mb-0">$999</h5>
//                 </div>

//                 <div class="d-flex justify-content-between mb-2">
//                   <p class="text-muted mb-0">
//                     Available: <span class="fw-bold">6</span>
//                   </p>
//                   <div class="ms-auto text-warning">
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                   </div>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//           <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
//             <MDBCard>
//               <div className="d-flex justify-content-between p-3">
//                 <p className="lead mb-0">Combo Offer</p>
//                 <div
//                   className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
//                   style={{ width: "35px", height: "35px" }}
//                 >
//                   <p className="text-white mb-0 small">x2</p>
//                 </div>
//               </div>
//               <MDBCardImage
//                 src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/7.webp"
//                 position="top"
//                 alt="Laptop"
//               />
//               <MDBCardBody>
//                 <div className="d-flex justify-content-between">
//                   <p className="small">
//                     <a href="#!" className="text-muted">
//                       Laptops
//                     </a>
//                   </p>
//                   <p className="small text-danger">
//                     <s>$1199</s>
//                   </p>
//                 </div>

//                 <div className="d-flex justify-content-between mb-3">
//                   <h5 className="mb-0">HP Envy</h5>
//                   <h5 className="text-dark mb-0">$1099</h5>
//                 </div>

//                 <div class="d-flex justify-content-between mb-2">
//                   <p class="text-muted mb-0">
//                     Available: <span class="fw-bold">7</span>
//                   </p>
//                   <div class="ms-auto text-warning">
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon far icon="star" />
//                   </div>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//           <MDBCol md="12" lg="4" className="mb-4 mb-lg-0">
//             <MDBCard>
//               <div className="d-flex justify-content-between p-3">
//                 <p className="lead mb-0">Combo Offer</p>
//                 <div
//                   className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
//                   style={{ width: "35px", height: "35px" }}
//                 >
//                   <p className="text-white mb-0 small">x3</p>
//                 </div>
//               </div>
//               <MDBCardImage
//                 src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/5.webp"
//                 position="top"
//                 alt="Gaming Laptop"
//               />
//               <MDBCardBody>
//                 <div className="d-flex justify-content-between">
//                   <p className="small">
//                     <a href="#!" className="text-muted">
//                       Laptops
//                     </a>
//                   </p>
//                   <p className="small text-danger">
//                     <s>$1399</s>
//                   </p>
//                 </div>

//                 <div className="d-flex justify-content-between mb-3">
//                   <h5 className="mb-0">Toshiba B77</h5>
//                   <h5 className="text-dark mb-0">$1299</h5>
//                 </div>

//                 <div class="d-flex justify-content-between mb-2">
//                   <p class="text-muted mb-0">
//                     Available: <span class="fw-bold">5</span>
//                   </p>
//                   <div class="ms-auto text-warning">
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star" />
//                     <MDBIcon fas icon="star-half-alt" />
//                   </div>
//                 </div>
//               </MDBCardBody>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <Footer />
//     </>
//   );
// }


import React from "react";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import ProductCards from '@/components/ProductCards'
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Pagination from 'react-bootstrap/Pagination';

export default function Products() {
  return (
    <>
      <Row className="mb-2">
        <NavBar />
      </Row>
      <Container>
        <Row className="mb-5">
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="mb-5">
          <CardGroup>
            <Card style={{ boxShadow: 'none' }}>
              <Image
                className="d-block w-100"
                src={require('/public/images/reveur_pods_1.png')}
                alt="reveur_pods_1"
                width={100}
                height={315}
              />
              <Card.Footer className="text-center">
                <a className="" href="#">reveur Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              </Card.Footer>
            </Card>
            <Card style={{ boxShadow: 'none' }}>
              <Image
                className="d-block w-100"
                src={require('/public/images/stizzy_pods_1.png')}
                alt="stizzy_pods_1"
                width={100}
                height={315}
              />
              <Card.Footer className="text-center">
                <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              </Card.Footer>
            </Card>
            <Card style={{ boxShadow: 'none' }}>
              <Image
                className="d-block w-100"
                src={require('/public/images/reveur_pods_1.png')}
                alt="reveur_pods_1"
                width={100}
                height={315}
              />
              <Card.Footer className="text-center">
                <a className="" href="#">reveur Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              </Card.Footer>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card style={{ boxShadow: 'none' }}>
              <Image
                className="d-block w-100"
                src={require('/public/images/reveur_pods_1.png')}
                alt="reveur_pods_1"
                width={100}
                height={315}
              />
              <Card.Footer className="text-center">
                <a className="" href="#">reveur Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              </Card.Footer>
            </Card>
            <Card style={{ boxShadow: 'none' }}>
              <Image
                className="d-block w-100"
                src={require('/public/images/stizzy_pods_1.png')}
                alt="stizzy_pods_1"
                width={100}
                height={315}
              />
              <Card.Footer className="text-center">
                <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              </Card.Footer>
            </Card>
            <Card style={{ boxShadow: 'none' }}>
              <Image
                className="d-block w-100"
                src={require('/public/images/reveur_pods_1.png')}
                alt="reveur_pods_1"
                width={100}
                height={315}
              />
              <Card.Footer className="text-center">
                <a className="" href="#">reveur Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
              </Card.Footer>
            </Card>
          </CardGroup>
        </Row>
        <Row>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </Row>
      </Container>
      <Footer />
    </>
  )
}
