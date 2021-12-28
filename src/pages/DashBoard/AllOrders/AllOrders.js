import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AllOrder from '../AllOrder/AllOrder';
import Order from '../Order/Order';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://shielded-savannah-24056.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ color: 'blue', fontWeight: '600' }} variant="h4">Total Order : {orders.length}</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        orders.map(order => <AllOrder
                            key={order._id}
                            orderInfo={order}
                        ></AllOrder>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AllOrders;