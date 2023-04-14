import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function About() {
  return (
    <Row className="d-flex justify-content-center align-items-center">
      <Col>
        <h1>Cannabis products & why to try them</h1>
        <p>
          Lorem ipsum dolor sit amet, for consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
        <a className="btn btn-outline-dark btn-md" href="#about-us">
          VIEW MORE
        </a>
      </Col>
      <Col>
        <Image
          className="d-block w-100"
          src={"/images/about.jpg"}
          alt="First slide"
          width={100}
          height={400}
        />
      </Col>
    </Row>
  );
}
