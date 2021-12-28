import { Button } from '@mui/material';
// import { Box } from '@mui/system';
import Box from '@mui/material/Box';
import React from 'react';
import { Link } from 'react-router-dom';

const NoteFound = () => {
    return (
        <div>
            <h1>404</h1>
            <Box sx={{ color: 'error.main' }}><h2>Sorry! The page you are looking for is not available</h2></Box><br />
            <Link style={{ textDecoration: 'none' }} to="/home">
                <Box>
                    <Button variant="outlined">Go To Home</Button>
                </Box>
            </Link>
        </div>
    );
};

export default NoteFound; <h1>not found</h1>