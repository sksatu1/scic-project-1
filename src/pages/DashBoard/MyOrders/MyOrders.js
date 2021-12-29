import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { fetchOrders } from '../../../redux/slices/bookSlice';
import Order from '../Order/Order';


const MyOrders = () => {
    // const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    // useEffect(() => {
    //     fetch('https://limitless-ridge-05457.herokuapp.com/orders')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // }, [])

    // using redux toolkit Start-----------------------
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrders())
    }, [])

    const orders = useSelector(state => state.bikes.orders)

     // using redux toolkit End-----------------------


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