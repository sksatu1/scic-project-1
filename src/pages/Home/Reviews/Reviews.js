import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews } from '../../../redux/slices/bookSlice';
import Review from '../Review/Review';


const Reviews = () => {
    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetch('https://limitless-ridge-05457.herokuapp.com/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])

    // using redux toolkit Start-----------------------
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchReviews())
    }, [])

    const reviews = useSelector(state=> state.bikes.reviews);
// using redux toolkit End-----------------------

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