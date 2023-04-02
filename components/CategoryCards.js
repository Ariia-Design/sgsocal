import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

export default function Hero() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <Row>
          <Col>
            <Card>

            </Card>
          </Col>
          <Col>
            <Card>

            </Card>
          </Col>
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}
