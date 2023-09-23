import GlobalFilter from "@/components/GlobalFilter";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBCardImage, MDBRipple } from "mdb-react-ui-kit";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment, useMemo, useState } from "react";
import { Card, Col, Container, Pagination, Table, Row } from "react-bootstrap";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useTable,
} from "react-table";

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
  column: { filterValue = [], setFilter, preFilteredRows, id },
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
      <div className="d-flex justify-content-around flex-wrap">
        {options?.map((option, i) => {
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
                <label htmlFor={option} className="form-check-label">
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

function Products({ productsData, heroData }) {
  const data = React.useMemo(() => {
    const dataArray = [];
    productsData?.data?.map((data) => {
      let obj = {};
      obj.category =
        data.attributes.home_page_categories.data[0].attributes.categoryUrl;
      obj.name = data.attributes.name;
      obj.price = data.attributes.price;
      obj.slug = data.attributes.slug;
      obj.url = data.attributes.productImage.data.attributes.url;
      obj.strainType = data.attributes.strainType;
      obj.thcLevel = data.attributes.thcLevel;
      obj.cbdLevel = data.attributes.cbdLevel;
      dataArray.push(obj);
    });
    return dataArray;
  }, [productsData.data]);

  const columns = React.useMemo(
    () => [
      {
        Header: "name",
        accessor: "name",
        Filter: "",
        filter: "",
      },
      {
        Header: "price",
        accessor: "price",
        Filter: "",
        filter: "",
      },
      {
        Header: "url",
        accessor: "url",
        Filter: "",
        filter: "",
      },
      {
        Header: "category",
        accessor: "category",
        Filter: ColumnFilter,
        filter: MultipleFilter,
      },
    ],
    []
  );

  const defaultColumn = useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

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
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageSize: 20 },
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const [active, setActive] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  function onItemClick(page) {
    event.preventDefault();
    setActive(page);
  }

  let items = [];
  for (let i = 1; i <= pageOptions.length; i++) {
    items.push(
      <Pagination.Item
        onClick={(e) => {
          gotoPage(i - 1);
          onItemClick(Number(e.target.innerHTML));
          setCurrentPage(Number(e.target.innerHTML));
        }}
        key={i}
        active={i === active}
      >
        {i}
      </Pagination.Item>
    );
  }

  const loaderProp = ({ src }) => {
    return src;
  };

  return (
    <>
      <div className="heroImage-container">
        <Image
          className="d-block w-100"
          src={heroData.data.attributes.heroImage.data.attributes.url}
          alt="hero"
          fill
          style={{ objectFit: "cover" }}
          loader={loaderProp}
        />
      </div>
      <Container className="py-5">
        <Row>
          <Table {...getTableProps()}>
            <thead>
              {headerGroups?.map((headerGroup, i) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                  {headerGroup.headers?.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      key={column.id}
                      data-id={column.id}
                    >
                      {column.canFilter ? column.render("Filter") : null}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              <tr>
                <td>
                  <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                  />
                </td>
              </tr>
              <tr className="d-flex flex-wrap">
                {page?.map((row) => {
                  return (
                    <td key={row.id} className="col-12 col-md-6 col-xl-3">
                      <Card style={{ position: "relative" }}>
                        <MDBRipple
                          className="bg-image hover-overlay shadow-1-strong rounded"
                          rippleTag="div"
                          rippleColor="light"
                          style={{ height: "100%" }}
                        >
                          <MDBCardImage
                            className="d-block w-100"
                            src={row.original.url}
                            alt="product"
                            width={100}
                            height={315}
                            quality={100}
                          />
                          {row.original.strainType
                            ? <label className="p-2 h6" style={{ position: "absolute", left: 0, top: "25px", backgroundColor: "#0c5c0a", color: "white" }}>{row.original.strainType.toUpperCase()}</label>
                            : ""
                          }
                          <Link
                            href={"/products/[slug]"}
                            as={`/products/${row.original.slug}`}
                          >
                            <div
                              className="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </Link>
                          <div
                            className="d-flex align-items-center justify-content-between p-2"
                            style={{ height: "95px", backgroundColor: "#333333" }}
                          >
                            <Col xl={10} className="product-card-title text-start">
                              <Link
                                href={"/products/[slug]"}
                                as={`/products/${row.original.slug}`}
                              >
                                <Row>
                                  <h6>{row.original.name}</h6>
                                </Row>
                                <Row>
                                  { row.original.thcLevel && row.original.cbdLevel
                                  ? <label>THC: {row.original.thcLevel} - CBD: {row.original.cbdLevel}</label>
                                  : "" }
                                </Row>
                              </Link>
                            </Col>
                            <Col xl={2} className="product-card-price text-end">
                              <Link
                                href={"/products/[slug]"}
                                as={`/products/${row.original.slug}`}
                              >
                                <h5>${row.original.price}</h5>
                              </Link>
                            </Col>
                          </div>
                        </MDBRipple>
                      </Card>
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </Table>
          <Col className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Pagination>
                <Pagination.First
                  onClick={() => {
                    gotoPage(0);
                    setActive(1);
                    setCurrentPage(1);
                  }}
                  disabled={!canPreviousPage}
                />
                <Pagination.Prev
                  onClick={() => {
                    previousPage();
                    setCurrentPage(currentPage - 1);
                    setActive(currentPage - 1);
                  }}
                  disabled={!canPreviousPage}
                />
                <Pagination>{items}</Pagination>
                <Pagination.Next
                  onClick={() => {
                    nextPage();
                    setCurrentPage(currentPage + 1);
                    setActive(currentPage + 1);
                  }}
                  disabled={!canNextPage}
                />
                <Pagination.Last
                  onClick={() => {
                    gotoPage(pageCount - 1);
                    setActive(pageCount);
                    setCurrentPage(pageCount);
                  }}
                  disabled={!canNextPage}
                />
              </Pagination>
              <div className="d-none d-xl-block">
                <select
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                  style={{ height: "38px" }}
                >
                  {[20, 50, 100]?.map((pageSize) => {
                    return (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const [navResponse, productsResponse, categoriesResponse, logoResponse, heroResponse] =
    await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/nav-items`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/products?populate=*`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/home-page-categories?populate=*`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/logo?populate=*`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/hero?populate=*`
      ),
    ]);
  const [navData, productsData, categoryData, logoData, heroData] = await Promise.all([
    navResponse.json(),
    productsResponse.json(),
    categoriesResponse.json(),
    logoResponse.json(),
    heroResponse.json()
  ]);
  return { props: { navData, productsData, categoryData, logoData, heroData } };
}

export default Products;
