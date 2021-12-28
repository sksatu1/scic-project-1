import { Box, Container } from '@mui/material';
import React from 'react';
import { BsFillChatDotsFill, BsFillGeoAltFill } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Footer.css';

const Footer = () => {
    const { user } = useAuth();
    return (
        <div className="footer-container">
            <Container>
                <hr />
                <Box className="footer">
                    <Box>
                        <h4>BD-BIKE-STORE</h4>
                        <p><BsFillChatDotsFill /> Chat or Call 7 (465) 474-01-01</p>
                        <p><BsFillGeoAltFill /> Shooting Club, Gulshan-1, Dhaka</p>
                    </Box>
                    <Box>
                        <h4>Page</h4>
                        <NavLink className="footer-link" to="/home">Home</NavLink><br />
                        <NavLink className="footer-link" to="/explore">Explore</NavLink><br />
                        {
                            user.email &&
                            <Box><NavLink className="footer-link" to="/dashboard">Dashboard</NavLink><br /></Box>
                        }
                        {
                            user.email &&
                            <Box><NavLink className="footer-link" to="/dashboard/myOrders">My Orders</NavLink><br /></Box>
                        }
                        {
                            user.email &&
                            <Box><NavLink className="footer-link" to="/dashboard/review">Review</NavLink><br /></Box>
                        }
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Footer;