import Image from "next/image";
import { List } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar({ props }) {
  return (
    <Navbar>
      <Container>
        <Col className="d-flex justify-content-start">
          <Navbar.Brand href="/">
            <Image src="/images/about.jpg" alt="logo" width={100} height={50} />
          </Navbar.Brand>
        </Col>
        <Col xs={6}>
          <Nav className="d-none d-lg-flex justify-content-between">
            {props?.data?.length > 0 &&
              props.data.map((item) => (
                <Nav.Item key={item.id}>
                  <Nav.Link href={item.attributes.url}>
                    {item.attributes.Title}
                  </Nav.Link>
                </Nav.Item>
              ))}
          </Nav>
        </Col>
        <Col className="d-flex justify-content-end">
          <Dropdown className="d-block d-lg-none" align="end">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <List size="45px"></List>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {props?.data?.length > 0 &&
                props.data.map((item) => (
                  <Dropdown.Item key={item.id} href={item.attributes.url}>
                    {item.attributes.Title}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Container>
    </Navbar>
  );
}
