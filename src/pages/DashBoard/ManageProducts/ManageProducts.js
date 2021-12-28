import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://shielded-savannah-24056.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ color: 'blue', fontWeight: '600' }} variant="h4">Our Top Bike Collections</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        bikes.map(bike => <ManageProduct
                            key={bike._id}
                            bike={bike}
                        ></ManageProduct>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ManageProducts;