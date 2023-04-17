import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useMemo } from "react";
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

function Products({ navData, productsData }) {

  const data = React.useMemo(() => {
    const dataArray = [];
    productsData.data.map((data) => {
      let obj = {};
      obj.name = data.attributes.name;
      obj.price = data.attributes.price;
      obj.url = data.attributes.productImage.data.attributes.url;
      dataArray.push(obj);
    })
    return dataArray
  }, [productsData.data])

  const columns = React.useMemo(() => [
      {
        Header: 'name',
        accessor: 'name'
      },
      {
        Header: 'price',
        accessor: 'price'
      },
      {
        Header: 'url',
        accessor: 'url'
      }
  ], [])

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

  const { globalFilter, pageIndex, pageSize } = state

  return (
    <Stack gap={4}>
      <NavBar props={navData} />
      <Container className="d-flex">
        <Col className="d-none d-sm-block d-md-block d-xl-block" xl={3}>
          <Table>
            <tbody>
              <tr>
                <td>
                  <Card>
                    <Stack gap={4}>
                      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                      <h5>Categories</h5>
                      <h5>Weight</h5>
                      <h5>Brands</h5>
                      <h5>Types</h5>
                      <h5>Effects</h5>
                      <h5>Price</h5>
                    </Stack>
                  </Card>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col xl={9}>
          <Table {...getTableProps()}>
            <tbody {...getTableBodyProps()}>
              <tr className="d-flex flex-wrap">
                {page.map(row => {
                  return (
                    <td key={row.id} class="col-12 col-md-6 col-xl-4">
                      <Card>
                        <MDBRipple
                          className='bg-image hover-overlay shadow-1-strong rounded'
                          rippleTag='div'
                          rippleColor='light'
                          style={{ height: "100%" }}
                        >
                          <Image
                            className="d-block w-100"
                            src={row.original.url}
                            alt="product"
                            width={100}
                            height={315}
                          />
                          <a href={"/Products/" + `${row.id}`}>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                          </a>
                          <div className="d-flex align-items-center justify-content-between" style={{ height: "60px" }}>
                            <div className="col-6 product-card-title text-start">
                              <a href={"/Products/" + `${row.id}`}><h6>{row.original.name}</h6></a>
                            </div>
                            <div className="product-card-price">
                              <a href={"/Products/" + `${row.id}`}><h5>${row.original.price}</h5></a>
                            </div>
                          </div>
                        </MDBRipple>
                      </Card>
                    </td>
                  )
                })}
              </tr>
            </tbody>
          </Table>
          <div className="d-flex">
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <div class="d-none d-xl-block">
              <span>
                | Go to page: {' '}
                <input
                  type='number' defaultValue={pageIndex + 1}
                  onChange={e => {
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                  }}
                  style={{ width: '50px' }}
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
            </div>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
            <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>{'>>'}</button>
          </div>
        </Col>
      </Container>
      <Footer />
    </Stack>
  )
}

export async function getServerSideProps(context) {
  const [navResponse, productsResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`),
  ]);
  const [navData, productsData] = await Promise.all([
    navResponse.json(),
    productsResponse.json()
  ])
  return { props: { navData, productsData } };
}

export default Products
