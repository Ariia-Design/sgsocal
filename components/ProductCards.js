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
        </CardGroup>
        <div className="d-flex justify-content-center">
          <a className="btn btn-outline-dark btn-md" href="#">VIEW MORE</a>
        </div>
      </Stack>
    </Container>
  )
}
