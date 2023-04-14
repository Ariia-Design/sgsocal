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

  const { globalFilter, pageIndex, pageSize } = state

  return (
    <Stack>
      <NavBar props={navData} />
      <Container>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
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
  const [navResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`),
  ]);
  const [navData] = await Promise.all([
    navResponse.json()
  ])
  return { props: { navData } };
}

export default Products
