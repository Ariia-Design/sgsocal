import Link from 'next/link';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { List } from 'react-bootstrap-icons';

export default function NavBar({ props }) {
    return (
        <Navbar>
            <Container>
                <Col className="d-flex justify-content-start">
                    <Navbar.Brand href="/">
                        <Image src={require('/public/images/logo_2.jpeg')} alt="logo" width={100}/>
                    </Navbar.Brand>
                </Col>
                <Col xs={6}>
                    <Nav className="d-none d-lg-flex justify-content-between">
                        {/* {
                            props.data.map(item => (
                                <Nav.Item>
                                    <Nav.Link href={item.attributes.url}>{item.attributes.Title}</Nav.Link>
                                </Nav.Item>
                            ))
                        } */}
                        {/* <Nav.Item>
                            <Nav.Link href={item.attributes.url}>{item.attributes.Title}</Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Dropdown className="d-block d-lg-none" align="end">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <List size="45px"></List>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {/* {props.data.map(item => (
                                <Dropdown.Item href={item.attributes.url}>{item.attributes.Title}</Dropdown.Item>
                            ))} */}
                            {/* <Dropdown.Item href={item.attributes.url}>{item.attributes.Title}</Dropdown.Item> */}

                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Container>
        </Navbar>
    );
}
