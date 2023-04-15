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
  console.log(productsData.data)
  const data = React.useMemo(
    () => [
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

  const { globalFilter, pageIndex, pageSize } = state

  return (
    <Stack>
      <NavBar props={navData} />
      <Container>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <Table {...getTableProps()}>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
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

  // < Stack gap = { 4} >
  //     <h1 className="text-center">Our New Products</h1>
  //     <div className="d-flex flex-wrap text-center" style={{rowGap: "1.5rem"}}>
  //       {
  //         props?.data?.length > 0 && props.data.map(item => (
  //           <Card key={item.id} className="card-flex-basis">
  //             <MDBRipple
  //               className='bg-image hover-overlay shadow-1-strong rounded'
  //               rippleTag='div'
  //               rippleColor='light'
  //               style={{ height: "100%" }}
  //             >
  //               <Image
  //                 className="d-block w-100"
  //                 src={item.attributes.newProductsImage.data[0].attributes.url}
  //                 alt="hero"
  //                 width={100}
  //                 height={315}
  //                 loader={loaderProp}
  //               />
  //               <a href='#!'>
  //                 <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
  //               </a>
  //               <a className="" href="#">{item.attributes.newProductsTitle}</a>
  //             </MDBRipple>
  //           </Card>
  //         ))
  //       }
  //     </div>
  //   </Stack >
