import { Button, Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const ManageProduct = ({ book }) => {
    const { name, img, price, _id } = book;

    // delete --------------------------
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')

        if (proceed) {
            fetch(`https://limitless-ridge-05457.herokuapp.com/books/${_id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    window.location.reload();
                })
        }
    }

    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ height: '100%' }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom sx={{ color: "blue", fontWeight: "600" }} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography
                        sx={{ m: 5, fontWeight: '600' }}
                        variant="h6" color="red">
                        price : {price}
                    </Typography>

                    <Button onClick={handleDelete} variant="contained"><DeleteForeverIcon /> Delete</Button>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default ManageProduct;