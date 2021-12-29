import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://limitless-ridge-05457.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    return (
        <Container>
            <Typography sx={{ color: 'blue', fontWeight: '600' }} variant="h4">Our Top Books Collections</Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        books.map(book => <ManageProduct
                            key={book._id}
                            book={book}
                        ></ManageProduct>)
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default ManageProducts;