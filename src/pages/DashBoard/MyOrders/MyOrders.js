import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const myOrders = orders.filter(order => order.email === user.email)

    return (
        <Container>
            <Typography sx={{ color: 'blue', fontWeight: '600', margin: '5px' }} variant="h4">You have {myOrders.length} orders</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        myOrders.map(order => <Order
                            key={order._id}
                            orderInfo={order}
                        ></Order>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default MyOrders;