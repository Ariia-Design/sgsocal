import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { MDBRipple } from 'mdb-react-ui-kit';

export default function ProductCardGroup({props}) {
  console.log('products cards props:', props);

  const loaderProp = ({ src }) => {
    return src;
  }

  return (
    <Stack gap={4}>
      <h1 className="text-center">Our New Products</h1>
      <div className="d-flex flex-wrap text-center" style={{rowGap: "1.5rem"}}>
        {
          props?.data?.length > 0 && props.data.map(item => (
            <Card key={item.id} className="card-flex-basis">
              <MDBRipple
                className='bg-image hover-overlay shadow-1-strong rounded'
                rippleTag='div'
                rippleColor='light'
                style={{ height: "100%" }}
              >
                <Image
                  className="d-block w-100"
                  src={item.attributes.newProductsImage.data[0].attributes.url}
                  alt="hero"
                  width={100}
                  height={315}
                  loader={loaderProp}
                />
                <a href='#!'>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                </a>
                <a className="" href="#">{item.attributes.newProductsTitle}</a>
              </MDBRipple>
            </Card>
          ))
        }
      </div>
    </Stack>
  )
}
