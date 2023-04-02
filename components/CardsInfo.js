import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {Truck} from 'react-bootstrap-icons';

export default function CardsInfo() {
  return (
    <Container>
      <Row>
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col key={idx}>
            <Card style={{ boxShadow: 'none', border: 'none', textAlign: 'center' }}>
              <Row>
                <Truck
                  size="75px"
                />
              </Row>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
