import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import UnstyledButtonCustom from '../../ButtonRoot/UnstyledButtonCustom';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const Bike = ({ book }) => {
    const { name, img, price, _id,author } = book;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ height: '100%', boxShadow: 5 }}>
                <CardMedia
                    height="300px"
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
                        price : TK.{price}
                    </Typography>
                    <Typography
                        sx={{ m: 5, fontWeight: '100' }}
                        variant="h6" color="black">
                        author : {author}
                    </Typography>

                </CardContent>

                <Box sx={{ my: '5px' }}>
                    <Link to={`/purchase/${_id}`}><UnstyledButtonCustom>Purchase</UnstyledButtonCustom></Link>
                </Box>
            </Card>
        </Grid>
    );
};

export default Bike;