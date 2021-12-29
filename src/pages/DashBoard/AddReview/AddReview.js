import { Alert, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const [rating, setRating] = React.useState(0);
    const [review, setReview] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleOnBlur = (e) => {
        const review = e.target.value;
        console.log(review);
        setReview(review);
    }

    const handleOnClick = () => {
        const userFeedback = {
            userName: user.displayName,
            review,
            rating
        }

        fetch('https://limitless-ridge-05457.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userFeedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setIsSuccess(true);
                }
            })
    }

    return (
        <Container>
            <Typography variant='h5'>
                Post Your Review here
            </Typography>

            <TextareaAutosize
                onBlur={handleOnBlur}
                minRows={4}
                aria-label="maximum height"
                placeholder="comment here"
                style={{ width: 200, width: '80%' }}
            />

            <Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">Give Ratings</Typography>
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newRating) => {
                        setRating(newRating);
                    }}
                />
                {/* <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={rating} readOnly /> */}

            </Box>

            <Button onClick={handleOnClick} sx={{ marginTop: '10px' }} variant="contained">Submit</Button>
            <br />
            {
                isSuccess && <Alert severity="success">Thanks for your feedback!</Alert>

            }
        </Container>
    );
};

export default AddReview;