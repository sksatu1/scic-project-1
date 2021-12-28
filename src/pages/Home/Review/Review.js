import { Card, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({ UserReview }) => {
    const { rating, review, userName } = UserReview;
    return (
        <Grid item xs={4} sm={4} md={4}>

            <Card sx={{ height: '100%', boxShadow: 5 }}>

                <CardContent>
                    <Typography gutterBottom sx={{ color: "blue", fontWeight: "600" }} variant="h5" component="div">
                        {userName}
                    </Typography>

                    <Typography
                        sx={{ m: 5 }}
                        variant="p" color="gray">
                        {review}
                    </Typography>

                    <Typography variant="body2">
                        <Rating name="read-only" value={rating} readOnly />
                    </Typography>

                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;