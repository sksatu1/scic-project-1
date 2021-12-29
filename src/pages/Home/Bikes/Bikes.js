import { Container, Grid, Box, Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchBooks } from '../../../redux/slices/bookSlice';
import Bike from '../Bike/Bike';

const Bikes = ({ slice }) => {
    // const [bikes, setBikes] = useState([]);

    // useEffect(() => {
    //     fetch('https://shielded-savannah-24056.herokuapp.com/products')
    //         .then(res => res.json())
    // .then(data => setBikes(data))
    // }, [])

// using redux toolkit Start-----------------------
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks())
    }, [])

    const books = useSelector(state => state.bikes.allCollections)
// using redux toolkit End-----------------------



    return (
        <Container>
            <Typography sx={{ color: 'blue', fontWeight: '600', my: '15px' }} variant="h4">Our Collections</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        books.map(book => <Bike
                            key={book._id}
                            book={book}
                        ></Bike>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Bikes;