import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';


const AllOrder = ({ orderInfo }) => {
    const product = orderInfo.order;

    const handleConfirm = () => {
        fetch(`https://shielded-savannah-24056.herokuapp.com/orders/${orderInfo._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                window.location.reload();
            })
    }

    return (
        <Grid item xs={4} sm={8} md={6}>
            <Card sx={{ height: '60%', textAlign: 'left' }}>
                <CardMedia
                    height="40%"
                    // width='50%'
                    component="img"
                    image={product.img}
                    alt="green iguana"
                />
                <CardContent>

                    <Typography gutterBottom sx={{ color: "blue", fontWeight: "600" }} variant="h5" component="div">
                        {product.name}
                    </Typography>
                    <Typography
                        sx={{ fontWeight: '600' }}
                        variant="h6" color="red">
                        price : {product.price}
                    </Typography>

                    <Typography variant="p">
                        Ordered by : {orderInfo.userName}
                    </Typography>
                    <br />
                    <Typography variant="p">
                        User email :{orderInfo.email}
                        <br />
                        Address : {orderInfo.address}
                        <br />
                        Phone : {orderInfo.phone}
                        <br />
                        Order ID : {orderInfo._id}
                        <br />
                        Product ID : {product._id}
                    </Typography>

                    <Typography
                        sx={{ fontWeight: '600' }}
                        variant="h6" color="red">
                        Status : {orderInfo.status}
                    </Typography>

                    <Button variant="contained" type="button" onClick={handleConfirm} className="btn btn-outline-danger my-btn me-4">Confirm</Button>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default AllOrder;