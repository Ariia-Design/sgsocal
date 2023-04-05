import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
export default function NavCmp({navItems}) {
    console.log(navItems)
    function useWindowSize() {
        // Initialize state with undefined width/height so server and client renders match
        // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                });
            }
            // Add event listener
            window.addEventListener('resize', handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener('resize', handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div className="container d-flex align-items-center border-bottom">
            <div className="col-3">
                <h1>Logo</h1>
            </div>
            {
                useWindowSize().width > 991
                    ? (
            <div className='col-6'>
            <div className="nav d-flex justify-content-between align-items-center">
            <Button className="btn-flat" variant="flat" href="#">Products</Button>
            <Button className="btn-flat" variant="flat" href="#">About Us</Button>
            <Button className="btn-flat" variant="flat" href="#">Order Now</Button>
            <Button className="btn-flat" variant="flat" href="#">Contact</Button>
            </div>
            <div className="col-3"></div>
            </div>
                    )
                    : (
                        <div className="nav col d-flex justify-content-end align-items-center">
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                style={{ color: 'black' }}
                            >
                                <i className="bi bi-list dropdown"></i>
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button'
                                }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <a href="#" className="nav-links">Home</a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#" className="nav-links">About Us</a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#" className="nav-links">Services</a>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <a href="#" className="nav-links">Contact Us</a>
                                </MenuItem>
                            </Menu>
                        </div>
                    )
                }
        </div>
    )
}