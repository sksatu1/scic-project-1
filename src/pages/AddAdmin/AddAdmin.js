import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/admin', {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h1>Make an Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="standard-basic"
                    sx={{ width: '50%' }}
                    type='email'
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard" />

                <Button
                    type="submit"
                    variant="contained">Add Admin</Button>
            </form>
            {
                success && <Alert severity="success">Admin added successfully!</Alert>
            }
        </div>
    );
};

export default AddAdmin;