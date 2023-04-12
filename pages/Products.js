import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useMemo} from "react";
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import GlobalFilter from '@/components/GlobalFilter';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'next/image';
import Stack from 'react-bootstrap/Stack';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { MDBRipple } from 'mdb-react-ui-kit';
import { useTable, usePagination, useFilters, useAsyncDebounce, useGlobalFilter } from 'react-table'

function Products({ navData }) {
  const data = React.useMemo(
    () => [
      {
        col1: 'Hello',
        col2: 'World',
        col3: 'test'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      },
      {
        col1: 'react-table',
        col2: 'rocks',
        col3: 'zest1'
      },
      {
        col1: 'whatever',
        col2: 'you want',
        col3: 'pest2'
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Product Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Product Column 2',
        accessor: 'col2',
      },
      {
        Header: 'Product Column 3',
        accessor: 'col3',
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({
    columns,
    data
  },
  useGlobalFilter,
  usePagination
  )

  const {globalFilter, pageIndex, pageSize} = state

  return (
    <Stack>
      <NavBar props={navData} />
      <Container>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <Table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                        key={cell.value}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>
        <div className="d-flex">
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
          </span>
          <span>
            | Go to page: {' '}
            <input
              type='number' defaultValue={pageIndex + 1}
              onChange = { e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
            }}
            style={{width: '50px'}}
            />
          </span>
          <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
            {
              [10, 25, 50].map(pageSize => {
                return (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                )
              })
            }
          </select>
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
          <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
      </Container>
      <Footer />
    </Stack>

  )
}

export async function getServerSideProps(context) {
  const [navResponse] = await Promise.all([
    fetch('http://127.0.0.1:1337/api/nav-items')
  ])
  const [navData] = await Promise.all([
    navResponse.json()
  ])
  return { props: { navData } };
}

export default Products


//Resource: https://react-table-v7.tanstack.com/docs/overview

  // const foo = {
  //   productId,
  //   productImage,
  //   productDescription,
  //   productPrice,
  // }

{/* <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroups.accessor}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px red',
                  background: 'aliceblue',
                  color: 'black',
                  fontWeight: 'bold',
                }}
                key={headerGroups.accessor}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead> */}


// function Products({ navData }) {
//   return (
//     <>
//       <NavBar props={navData}/>
//       <Container>
//         <Row>
//           <Breadcrumb>
//             <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
//             <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
//               Library
//             </Breadcrumb.Item>
//             <Breadcrumb.Item active>Data</Breadcrumb.Item>
//           </Breadcrumb>
//         </Row>
//         <Row className="align-items-center">
//           <Col>
//             <p>Showing 1–15 of 55 results</p>
//           </Col>
//           <Col className="text-end">
//             <Dropdown>
//               <Dropdown.Toggle id="dropdown-basic">
//                 Default Sorting&nbsp;&nbsp;&nbsp;<i class="bi bi-chevron-down"></i>
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Default sorting</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Sort by popularity</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Sort by average rating</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//           </Col>
//         </Row>
//         <Row>
//           <Col xs={3} xl={3}>
//             <Card>
//               <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
//               <Card.Title>
//                 Categories
//               </Card.Title>
//               <Card.Body>
//                 <Row className="d-block">
//                   <button>Pre-rolls</button>
//                   <button>Vaporizers</button>
//                   <button>Concentrates</button>
//                   <button>Edibles</button>
//                   <button>Tinctures</button>
//                   <button>Topicals</button>
//                   <button>CBD</button>
//                   <button>Accessories</button>
//                 </Row>
//               </Card.Body>
//               <Card.Title>
//                 Weight
//               </Card.Title>
//               <Card.Body>
//                 <Row className="d-block">
//                   <button>0.3g</button>
//                   <button>0.5g</button>
//                   <button>0.6g</button>
//                   <button>0.75g</button>
//                   <button>1.3g</button>
//                   <button>14g</button>
//                   <button>1oz</button>
//                   <button>2.5oz</button>
//                 </Row>
//               </Card.Body>
//               <Card.Title>
//                 Brands
//               </Card.Title>
//               <Card.Body>
//                 <Row className="d-block">
//                   <button>3C CANNABIS</button>
//                   <button>420 KINGDOM</button>
//                   <button>AXIOM</button>
//                   <button>BABY JEETER</button>
//                   <button>BIG CHIEF</button>
//                   <button>BIG TREE</button>
//                   <button>CANN</button>
//                   <button>CHEMISTRY</button>
//                 </Row>
//               </Card.Body>
//               <Card.Title>
//                 Types
//               </Card.Title>
//               <Card.Body>
//                 <Row className="d-block">
//                   <button>CBD</button>
//                   <button>GLUTEN FREE</button>
//                   <button>HYBRID</button>
//                   <button>INDICA</button>
//                   <button>SATIVA</button>
//                   <button>VEGAN</button>
//                 </Row>
//               </Card.Body>
//               <Card.Title>
//                 Effects
//               </Card.Title>
//               <Card.Body>
//                 <Row className="d-block">
//                   <button>CALM</button>
//                   <button>CLEAR MIND</button>
//                   <button>CREATIVE</button>
//                   <button>ENERGETIC</button>
//                   <button>EUPHORIC</button>
//                   <button>FOCUSED</button>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col xs={9} xl={9}>
//             <Row>
//               <CardGroup>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//               </CardGroup>
//             </Row>
//             <Row>
//               <CardGroup>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//               </CardGroup>
//             </Row>
//             <Row>
//               <CardGroup>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//                 <Card style={{ boxShadow: 'none' }}>
//                   <MDBRipple
//                     className='bg-image hover-overlay shadow-1-strong rounded'
//                     rippleTag='div'
//                     rippleColor='light'
//                   >
//                     <Image
//                       className="d-block w-100"
//                       src={require('/public/images/stizzy_pods_1.png')}
//                       alt="stizzy_pods_1"
//                       width={100}
//                       height={315}
//                     />
//                     <a href='#!'>
//                       <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
//                     </a>
//                     <Card.Footer className="text-center">
//                       <a className="" href="#">Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit.Stiizy Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
//                     </Card.Footer>
//                   </MDBRipple>
//                 </Card>
//               </CardGroup>
//             </Row>
//             <Row>
//               <Pagination className="justify-content-center">
//                 <Pagination.First />
//                 <Pagination.Prev />
//                 <Pagination.Item>{1}</Pagination.Item>
//                 <Pagination.Ellipsis />

//                 <Pagination.Item>{10}</Pagination.Item>
//                 <Pagination.Item>{11}</Pagination.Item>
//                 <Pagination.Item active>{12}</Pagination.Item>
//                 <Pagination.Item>{13}</Pagination.Item>
//                 <Pagination.Item disabled>{14}</Pagination.Item>

//                 <Pagination.Ellipsis />
//                 <Pagination.Item>{20}</Pagination.Item>
//                 <Pagination.Next />
//                 <Pagination.Last />
//               </Pagination>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//       <Footer />
//     </>
//   )
// }
