import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import { MDBRipple } from 'mdb-react-ui-kit';


export default function ProductCardGroup() {
  return(
    <Stack gap={4}>
      <h1 className="text-center">Our New Products</h1>
      <CardGroup>
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
              <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
            </Card.Footer>
          </MDBRipple>
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
    </Stack>
  )
}
