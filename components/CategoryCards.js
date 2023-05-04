import Image from "next/image";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-multi-carousel";
import Card from 'react-bootstrap/Card';
import "react-multi-carousel/lib/styles.css";
import Router from 'next/router';

export default function CategoryCards({ props }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const loaderProp = ({ src }) => {
    return src;
  };

  const handleClick = (path) => {
    Router.push({
      pathname: "/Products",
      query: {category: path}
    })
  }

  return (
    <Stack className="text-center" gap={4}>
      <h1>Product Categories</h1>
      <Carousel responsive={responsive}>
        {props?.data?.length > 0 &&
          props.data.map((item) => (
            <Card key={item.id} className="hover-zoom position-relative">
              <a onClick={(e) => handleClick(e.target.id)}>
                <Image
                  className="d-block w-100"
                  src={item.attributes.categoryImage.data[0].attributes.url}
                  alt="category"
                  id={item.attributes.categoryUrl}
                  width={100}
                  height={315}
                  loader={loaderProp}
                />
              </a>
              <div className="position-absolute text-light ps-3" style={{bottom:0}}>
                <h3>{item.attributes.categoryTitle}</h3>
              </div>
            </Card>
          ))}
      </Carousel>
    </Stack>
  );
}
