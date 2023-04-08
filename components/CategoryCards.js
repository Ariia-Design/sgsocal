import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';

function CategoryCards({props}) {

  /**
   * This page has dynamic data - proof in the console log
   * No content has been created yet but fields have been set up
   */
  console.log('category props:', props )
  return (
    <Stack gap={4}>
      <h1 className="text-center">Product Categories</h1>
      <Carousel variant="dark" indicators={false}>
        <Carousel.Item>
          <Row>
            <Col>
              <Card>
                <Image
                  className="d-block w-100"
                  src={require('/public/images/reveur_pods_1.png')}
                  alt="reveur_pods_1"
                  width={100}
                  height={315}
                />
              </Card>
            </Col>
            <Col>
              <Card>
                <Image
                  className="d-block w-100"
                  src={require('/public/images/reveur_pods_1.png')}
                  alt="reveur_pods_1"
                  width={100}
                  height={315}
                />
              </Card>
            </Col>
            <Col>
              <Card>
                <Image
                  className="d-block w-100"
                  src={require('/public/images/reveur_pods_1.png')}
                  alt="reveur_pods_1"
                  width={100}
                  height={315}
                />
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row>
            <Col>
              <Card>
                <Image
                  className="d-block w-100"
                  src={require('/public/images/reveur_pods_1.png')}
                  alt="reveur_pods_1"
                  width={100}
                  height={315}
                />
              </Card>
            </Col>
            <Col>
              <Card>
                <Image
                  className="d-block w-100"
                  src={require('/public/images/reveur_pods_1.png')}
                  alt="reveur_pods_1"
                  width={100}
                  height={315}
                />
              </Card>
            </Col>
            <Col>
              <Card>
                <Image
                  className="d-block w-100"
                  src={require('/public/images/reveur_pods_1.png')}
                  alt="reveur_pods_1"
                  width={100}
                  height={315}
                />
              </Card>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Stack>
  );
}

export default CategoryCards;
