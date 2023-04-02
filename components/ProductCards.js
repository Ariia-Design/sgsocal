import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';

export default function ProductCardGroup() {
  return(
    <Container>
      <Stack gap={4}>
        <h1 className="text-center">Our New Products</h1>
        <CardGroup>
          <Card style={{ boxShadow: 'none' }}>
            <Card.Img variant="top" src={require('/public/images/reveur_pods_1.png')} />
            <Card.Footer className="text-center">
              <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </Card.Footer>
          </Card>
          <Card style={{ boxShadow: 'none' }}>
            <Card.Img variant="top" src={require('/public/images/hero_1.jpeg')} />
            <Card.Footer className="text-center">
              <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </Card.Footer>
          </Card>
          <Card style={{ boxShadow: 'none' }}>
            <Card.Img variant="top" src={require('/public/images/hero_1.jpeg')} />
            <Card.Footer className="text-center">
              <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </Card.Footer>
          </Card>
          <Card style={{ boxShadow: 'none' }}>
            <Card.Img variant="top" src={require('/public/images/hero_1.jpeg')} />
            <Card.Footer className="text-center">
              <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
            </Card.Footer>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card style={{ boxShadow: 'none' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ boxShadow: 'none' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ boxShadow: 'none' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card style={{ boxShadow: 'none' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This card has even longer content than the
                first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Stack>
    </Container>
  )
}
