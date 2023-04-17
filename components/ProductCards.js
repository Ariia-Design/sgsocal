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

  return (
    <Stack gap={4}>
      <h1 className="text-center">Our New Products</h1>
      <Table>
        <tbody>
          <tr className="d-flex flex-wrap">
            {
              props?.data?.length > 0 && props.data.map(item => (
                <td key={item.id} className="col-12 col-md-6 col-xl-3">
                  <Card>
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
                      />
                      <a href='#!'>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                      </a>
                      <div className="d-flex align-items-center justify-content-between" style={{ height: "60px" }}>
                        <div className="col-6 product-card-title text-start">
                          <a href="#"><h6>{item.attributes.newProductsTitle}</h6></a>
                        </div>
                        <div className="product-card-price">
                          <a href="#"><h5>${item.attributes.newProductsPrice}</h5></a>
                        </div>
                      </div>
                    </MDBRipple>
                  </Card>
                </td>

              ))
            }
          </tr>
        </tbody>
      </Table>
    </Stack>
  )
}
