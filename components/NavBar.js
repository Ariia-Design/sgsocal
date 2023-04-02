import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import { List } from 'react-bootstrap-icons';

export default function NavBar() {
    return (
        <Navbar variant="light" bg="light">
            <Container>
                <Col className="d-flex justify-content-start">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                </Col>
                <Col xs={6}>
                    <Nav className="d-none d-lg-flex justify-content-between">
                        <Nav.Item>
                            <Nav.Link href="#about-us">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#weekly-deals">Weekly Deals</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#products">Products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Dropdown className="d-block d-lg-none" align="end">
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            <List size="45px"></List>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#about-us">About Us</Dropdown.Item>
                            <Dropdown.Item href="#weekly-deals">Weekly Deals</Dropdown.Item>
                            <Dropdown.Item href="#products">Products</Dropdown.Item>
                            <Dropdown.Item href="#contact-us">Contact Us</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Container>
        </Navbar>
    );
}
