import { Card, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import useAuth from '../../../hooks/useAuth';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Order = ({ orderInfo }) => {
    const product = orderInfo.order;
    // const { user } = useAuth();

    // delete --------------------------
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')

        if (proceed) {
            fetch(`http://localhost:5000/orders/${orderInfo._id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                })
        }
    }

    return (
        <Grid item xs={4} sm={8} md={6}>
            <Card sx={{ height: '100%', textAlign: 'left' }}>
                <CardMedia
                    // height="200px"
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


                    <Box>
                        <Button onClick={handleDelete} variant="contained"><DeleteForeverIcon /> Delete</Button>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Order;