import Image from "next/image";
import Stack from "react-bootstrap/Stack";
import Carousel from "react-multi-carousel";
import Card from 'react-bootstrap/Card';
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';

export default function CategoryCards({ props }) {
  console.log("category props:", props.data);
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

  return (
    <Stack className="text-center" gap={4}>
      <h1>Product Categories</h1>
      <Carousel responsive={responsive}>
        {props?.data?.length > 0 &&
          props.data.map((item) => (
            <Card key={item.id} className="hover-zoom position-relative">
              <Link href="/Products">
                <Image
                  className="d-block w-100"
                  src={item.attributes.categoryImage.data[0].attributes.url}
                  alt="category"
                  width={100}
                  height={315}
                  loader={loaderProp}
                />
                <div className="position-absolute" style={{ bottom: "0", left: "10px" }}>
                  <a href="" style={{ color: "white", fontSize: "2rem" }}>{item.attributes.categoryTitle}</a>
                </div>
              </Link>
            </Card>
          ))}
      </Carousel>
    </Stack>
  );
}
