// export default function Nav() {
// return (
//         <div className="d-flex align-items-center">
//             <div className="col-3"><h4>LOGO</h4></div>
//             <div className="col-6">
//                 <nav class="nav justify-content-between">


//                     <a
//                         className="btn btn-link btn-floating btn-lg text-dark nav-link active"
//                         href="#!"
//                         role="button"
//                     >
//                         <h6>Home</h6>
//                     </a>


//                     <a
//                         className="btn btn-link btn-floating btn-lg text-dark nav-link"
//                         href="#!"
//                         role="button"
//                     >
//                         <h6>About Us</h6>
//                     </a>


//                     <a
//                         className="btn btn-link btn-floating btn-lg text-dark nav-link"
//                         href="#!"
//                         role="button"
//                     >
//                         <h6>Weekly Deals</h6>
//                     </a>


//                     <a
//                         className="btn btn-link btn-floating btn-lg text-dark nav-link"
//                         href="#!"
//                         role="button"
//                     >
//                         <h6>Products</h6>
//                     </a>


//                     <a
//                         className="btn btn-link btn-floating btn-lg text-dark nav-link"
//                         href="#!"
//                         role="button"
//                     >
//                         <h6>Contact Us</h6>
//                     </a>


//                 </nav>
//             </div>
//             <div className="col-3"></div>
//         </div>
//     )
// }
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import { List } from 'react-bootstrap-icons';

export default function NavBar() {
    return (
        <Navbar className="px-4" variant="light" bg="light">
            <Col className="d-flex justify-content-start">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            </Col>
            <Col xs={6}>
                <Nav className="d-none d-lg-flex justify-content-between">
                    <Nav.Item>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#weekly-deals">Weekly Deals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#products">Products</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col className="d-flex justify-content-end">
                <List size="45px" className="d-block d-lg-none"></List>
            </Col>
        </Navbar>
    );
}
