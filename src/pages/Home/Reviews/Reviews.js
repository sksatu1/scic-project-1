import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://shielded-savannah-24056.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container maxWidth="lg">
            <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                Client reviews
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        reviews.map(UserReview => <Review
                            key={UserReview._id}
                            UserReview={UserReview}
                        ></Review>)
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default Reviews;