import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { List } from 'react-bootstrap-icons';

export default function NavBar() {
    return (
        <Navbar className="px-4" variant="light" bg="light">
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
                <List size="45px" className="d-block d-lg-none"></List>
            </Col>
        </Navbar>
    );
}
