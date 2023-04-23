import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { Fragment, useMemo, useState } from "react";
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
import { useTable, usePagination, useFilters, useGlobalFilter } from 'react-table'
import Link from 'next/link';

export const MultipleFilter = (rows, filler, filterValue) => {
  const arr = [];
  rows.forEach((val) => {
    if (filterValue.includes(val.original.category)) arr.push(val);
  });
  return arr;
};

function setFilteredParams(filterArr, val) {
  if (filterArr.includes(val)) {
    filterArr = filterArr.filter((n) => {
      return n !== val;
    });
  } else filterArr.push(val);

  if (filterArr.length === 0) filterArr = undefined;
  return filterArr;
}

function ColumnFilter({
  column: { filterValue = [], setFilter, preFilteredRows, id }
}) {
    const options = useMemo(() => {
      const options = new Set();
      preFilteredRows.forEach((row) => {
        options.add(row.values[id]);
      });
      return [...options.values()];
    }, [id, preFilteredRows]);

  return (
    <Fragment>
      <div className="block">
        {options.map((option, i) => {
          return (
            <Fragment key={i}>
              <div className="d-flex">
                <input
                  type="checkbox"
                  id={option}
                  name={option}
                  value={option}
                  onChange={(e) => {
                    setFilter(setFilteredParams(filterValue, e.target.value));
                  }}
                ></input>
                <label
                  htmlFor={option}
                  className="form-check-label"
                >
                  {option.toUpperCase()}
                </label>
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
}

function Products({ navData, productsData }) {
  const data = React.useMemo(() => {
    const dataArray = [];
    productsData.data.map((data) => {
      let obj = {};
      obj.category = data.attributes.home_page_categories.data[0].attributes.categoryUrl;
      obj.name = data.attributes.name;
      obj.price = data.attributes.price;
      obj.slug = data.attributes.slug;
      obj.url = data.attributes.productImage.data.attributes.url;
      dataArray.push(obj);
    })
    return dataArray
  }, [productsData.data])

  const columns = React.useMemo(() => [
      {
        Header: 'name',
        accessor: 'name',
        Filter: "",
        filter: ""
      },
      {
        Header: 'price',
        accessor: 'price',
        Filter: "",
        filter: ""
      },
      {
        Header: 'url',
        accessor: 'url',
        Filter: "",
        filter: ""
      },
      {
        Header: 'category',
        accessor: 'category',
        Filter: ColumnFilter,
        filter: MultipleFilter
      }
  ], [])

  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
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
    headerGroups,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({
    columns,
    data,
    defaultColumn,
    initialState: {
      pageSize: 12,
      // filters: [
      //   {
      //     id: "category",
      //     value: "edibles"
      //   }
      // ]
    }
  },
    useFilters,
    useGlobalFilter,
    usePagination
  )

  const { globalFilter, pageIndex, pageSize } = state
  const [active, setActive] = useState(1);

  function onItemClick(page) {
    event.preventDefault();
    setActive(page)
  }

  let items = [];
  for (let i = 1; i <= pageOptions.length; i++) {
    items.push(
      <Pagination.Item onClick={(e) => {
        gotoPage(i - 1);
        onItemClick(Number(e.target.innerHTML));
      }}
       key={i} active={i === active}>
        {i}
      </Pagination.Item>
    )
  }

  return (
    <Stack gap={4}>
      <NavBar props={navData} />
      <Container className="d-flex">
        <Col className="d-none d-sm-block d-md-block d-xl-block" xl={3}>
          <Card>
            <Table>
              <thead>
                {headerGroups.map((headerGroup, i) => (
                  <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()} key={column.id} data-id={column.id}>
                        {column.canFilter ? column.render("Filter") : null}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Stack gap={4}>
                      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
                    </Stack>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col xl={9}>
          <Table {...getTableProps()}>
            <tbody {...getTableBodyProps()}>
              <tr className="d-flex flex-wrap">
                {page.map(row => {
                  return (
                    <td key={row.id} className="col-12 col-md-6 col-xl-4">
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
                          <Link href={"/products/[slug]"} as={`/products/${row.original.slug}`}>
                            <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                          </Link>
                          <div className="d-flex align-items-center justify-content-between" style={{ height: "60px" }}>
                            <div className="col-6 product-card-title text-start">
                              <Link href={"/products/[slug]"} as={`/products/${row.original.slug}`}><h6>{row.original.name}</h6></Link>
                            </div>
                            <div className="product-card-price">
                              <Link href={"/products/[slug]"} as={`/products/${row.original.slug}`}><h5>${row.original.price}</h5></Link>
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
          <div className="d-flex align-items-center">
            <span>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <div className="d-none d-xl-block">
              {/* <span>
                | Go to page: {' '}
                <input
                  type='number' defaultValue={pageIndex + 1}
                  onChange={e => {
                    setActive(e.target.value)
                    const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                    gotoPage(pageNumber)
                  }}
                  style={{ width: '50px' }}
                />
              </span> */}
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
            <Pagination className="d-flex align-items-center">
              <Pagination.First onClick={() => {gotoPage(0); setActive(1);}} disabled={!canPreviousPage} />
              {/* <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button> */}
              <Pagination.Prev onClick={(e) => {previousPage(); console.log(e.selected)}} disabled={!canPreviousPage} />
              <Pagination>{items}</Pagination>
              {/* <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button> */}
              <Pagination.Next onClick={(e) => {nextPage(); console.log(page)}} disabled={!canNextPage} />
              <Pagination.Last onClick={() => {gotoPage(pageCount - 1); setActive(pageCount);}} disabled={!canNextPage} />
            </Pagination>
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
