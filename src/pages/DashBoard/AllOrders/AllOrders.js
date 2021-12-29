import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { fetchOrders } from '../../../redux/slices/bookSlice';
import AllOrder from '../AllOrder/AllOrder';
import Order from '../Order/Order';

const AllOrders = () => {
    // const [orders, setOrders] = useState([]);

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