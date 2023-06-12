import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar({ props }) {
  /*
  react useState hook to save the current open/close state of the drawer,
  normally variables dissapear afte the function was executed
  */
  const [open, setState] = useState(false);

  /*
  function that is being called every time the drawer should open or close,
  the keys tab and shift are excluded so the user can focus between
  the elements with the keys
  */
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar position="static" color="default" className="py-2" style={{ backgroundColor: "#F0EFE6" }}>
      <container>
        <Toolbar>
          <Col className="d-flex justify-content-start">
            <Navbar.Brand href="/">
              <Image
                src={
                  props?.logoData?.data?.attributes?.logoImage?.data?.attributes.url
                }
                alt="logo"
                width={160}
                height={75}
                objectFit="contain"
                priority
              />
            </Navbar.Brand>
          </Col>
          <Col className="d-none d-xs-none d-lg-block" lg={5} xl={4}>
            <Nav className="d-lg-flex justify-content-between">
              {props?.navData?.data?.length > 0 &&
                props?.navData?.data?.map((item) => (
                  <Nav.Item key={item.id}>
                    <Nav.Link href={item.attributes.url}>
                      {item.attributes.Title}
                    </Nav.Link>
                  </Nav.Item>
                ))}
            </Nav>
          </Col>
          <Col></Col>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: "block",
              "@media (min-width: 992px)": {
                display: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            PaperProps={{
              sx: { width: "50%" },
            }}
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            // onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#f5f5f5",
              }}
            >
              {/*
                when clicking the icon it calls the function toggleDrawer
                and closes the drawer by setting the variable open to false
                */}
              <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
              <Divider sx={{ mb: 2 }} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: 1,
                }}
              >
                <div className="d-flex flex-column w-100 gap-5">
                  {props?.navData?.data?.length > 0 &&
                    props.navData.data.map((item) => (
                      <Nav.Item key={item.id} className="d-flex justify-content-center">
                        <Nav.Link href={item.attributes.url} className="d-flex align-items-center justify-content-center" style={{ height: "40px" }}>
                          {item.attributes.Title}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                </div>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </container>
    </AppBar>
  );
}
