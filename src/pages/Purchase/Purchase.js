import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Alert, Button, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const Purchase = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [order, setOrder] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm();


    useEffect(() => {
        fetch(`http://localhost:5000/books/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const onSubmit = data => {
        data.order = order;
        data.status = 'pending'
        console.log(data)

        // save to db ------------------
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId)
                if (data.insertedId) {
                    alert('Order Added .Please go to dashboard to check your order');
                    window.location.reload();
                }
            })


    };

    // const [expanded, setExpanded] = React.useState(false);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded);
    // };


    return (

        <Box>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img width="100%" src={order.img} alt="" />
                </Grid>
                <Grid item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left' }} xs={8}>
                    <Box>
                        <Typography sx={{ marginBottom: '20px', fontWeight: '600' }} variant='h4'>
                            {
                                order.name
                            }
                        </Typography>
                        <Typography sx={{ marginBottom: '20px' }} variant='h4'>
                            {
                                order.price
                            }
                        </Typography>
                        <Typography sx={{ marginBottom: '20px' }} variant='p'>
                            {
                                order.description
                            }
                        </Typography>
                        <br />
                        <br />
                        <br />

                    </Box>
                </Grid>
            </Grid>


            {/*-------------------------- form------------------------------------  */}

            <h1>Please give your information and submit</h1>

            <form style={{ marginBottom: '10px' }} onSubmit={handleSubmit(onSubmit)}>

                <input style={{ width: '60%', marginBottom: '5px' }} defaultValue={user.displayName} {...register("userName", { required: true })} readOnly />

                <input style={{ width: '60%', marginBottom: '5px' }} defaultValue={user.email} {...register("email", { required: true })} readOnly />

                <input style={{ width: '60%', marginBottom: '5px' }} placeholder='address'  {...register("address", { required: true })} />

                <input type='tel' style={{ width: '60%', marginBottom: '5px' }} placeholder='phone'  {...register("phone", { required: true })} />

                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input style={{ backgroundColor: '#1976d2', color: 'white', padding: '5px', borderRadius: '5px', fontWeight: "600" }} value='Place Order' type="submit" />
            </form>

            <Footer></Footer>
        </Box>
    );
};

export default Purchase;