import Image from "next/image";
import { Link, List } from "react-bootstrap-icons";
import Col from "react-bootstrap/Col";
import { Container as container } from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material";
import { margin } from "@mui/system";

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
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar position="static" color="default" className="py-2">
      <container>
        <Toolbar>
          <Col className="d-flex justify-content-start">
            <Navbar.Brand href="/">
                <Image src={"/images/logo.png"} alt="logo" width={160} height={75} objectFit="contain" />
            </Navbar.Brand>
          </Col>
          <Col className="d-none d-xs-none d-lg-block" xs={6}>
            <Nav className="d-lg-flex justify-content-between">
              {props?.data?.length > 0 &&
                props.data.map((item) => (
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
              display: 'block',
              '@media (min-width: 992px)': {
                display: 'none',
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
            <Box sx={{
              p: 2,
              height: 1,
              backgroundColor: "white",
            }}>
              {/*
                when clicking the icon it calls the function toggleDrawer
                and closes the drawer by setting the variable open to false
                */}
              <IconButton sx={{ mb: 2 }} onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 1 }}>
                <div className="d-flex flex-column w-100 gap-5">
                  {props?.data?.length > 0 &&
                    props.data.map((item) => (
                      <Nav.Item key={item.id} style={{
                        width: "75%",
                        textAlign: 'center',
                        marginBottom: '2rem',
                        margin: '0 auto'
                      }}>
                        <Nav.Link href={item.attributes.url}>
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
