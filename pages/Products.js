import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from "react";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { MDBRipple } from 'mdb-react-ui-kit';

function Products({ navData, productsData }) {
  return (
    <>
      <NavBar props={navData}/>
      <Container>
        <Row>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <Row className="align-items-center">
          <Col>
            <p>Showing 1–15 of 55 results</p>
          </Col>
          <Col className="text-end">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                Default Sorting&nbsp;&nbsp;&nbsp;<i class="bi bi-chevron-down"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Default sorting</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Sort by popularity</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Sort by average rating</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col xs={3} xl={3}>
            <Card>
              <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
              <Card.Title>
                Categories
              </Card.Title>
              <Card.Body>
                <Row className="d-block">
                  <button>Pre-rolls</button>
                  <button>Vaporizers</button>
                  <button>Concentrates</button>
                  <button>Edibles</button>
                  <button>Tinctures</button>
                  <button>Topicals</button>
                  <button>CBD</button>
                  <button>Accessories</button>
                </Row>
              </Card.Body>
              <Card.Title>
                Weight
              </Card.Title>
              <Card.Body>
                <Row className="d-block">
                  <button>0.3g</button>
                  <button>0.5g</button>
                  <button>0.6g</button>
                  <button>0.75g</button>
                  <button>1.3g</button>
                  <button>14g</button>
                  <button>1oz</button>
                  <button>2.5oz</button>
                </Row>
              </Card.Body>
              <Card.Title>
                Brands
              </Card.Title>
              <Card.Body>
                <Row className="d-block">
                  <button>3C CANNABIS</button>
                  <button>420 KINGDOM</button>
                  <button>AXIOM</button>
                  <button>BABY JEETER</button>
                  <button>BIG CHIEF</button>
                  <button>BIG TREE</button>
                  <button>CANN</button>
                  <button>CHEMISTRY</button>
                </Row>
              </Card.Body>
              <Card.Title>
                Types
              </Card.Title>
              <Card.Body>
                <Row className="d-block">
                  <button>CBD</button>
                  <button>GLUTEN FREE</button>
                  <button>HYBRID</button>
                  <button>INDICA</button>
                  <button>SATIVA</button>
                  <button>VEGAN</button>
                </Row>
              </Card.Body>
              <Card.Title>
                Effects
              </Card.Title>
              <Card.Body>
                <Row className="d-block">
                  <button>CALM</button>
                  <button>CLEAR MIND</button>
                  <button>CREATIVE</button>
                  <button>ENERGETIC</button>
                  <button>EUPHORIC</button>
                  <button>FOCUSED</button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={9} xl={9}>
            <Row>
              <CardGroup>
                {productsData.data.map(item => (
                  <Card style={{ boxShadow: 'none' }}>
                    <MDBRipple
                      className='bg-image hover-overlay shadow-1-strong rounded'
                      rippleTag='div'
                      rippleColor='light'
                    >
                      <Image
                        className="d-block w-100"
                        src={require('/public/images/stizzy_pods_1.png')}
                        alt="stizzy_pods_1"
                        width={100}
                        height={315}
                      />
                      <a href='#!'>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                      </a>
                      <Card.Footer className="text-center">
                        <a className="" href="#">{item.attributes.name}</a>
                      </Card.Footer>
                    </MDBRipple>
                  </Card>
                ))}
              </CardGroup>
            </Row>
            <Row>
              <Pagination className="justify-content-center">
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
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const [navResponse, productsResponse] = await Promise.all([
    fetch('http://127.0.0.1:1337/api/nav-items'),
    fetch('http://127.0.0.1:1337/api/products')
  ])
  const [navData, productsData] = await Promise.all([
    navResponse.json(),
    productsResponse.json()
  ])
  return { props: { navData, productsData } };
}

export default Products
