import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();

    const onSubmit = data => {
        fetch("https://limitless-ridge-05457.herokuapp.com/books", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data.insertedId);
                if (data.insertedId) {
                    alert('Successfully added New Product');
                    history.push('/home');
                }
            })
        console.log(data);
    }


    const inputFormStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const inputFieldStyle = {
        border: '1px solid blue',
        borderRadius: '5px',
        marginBottom: '5px',
        padding: '10px',
        width: '80%'
    }

    return (
        <div>
            {/* form  */}
            <h1>Add a New Product</h1>
            <form style={inputFormStyle} onSubmit={handleSubmit(onSubmit)}>
                <input style={inputFieldStyle} {...register("name", { required: true })} placeholder='Book name' />

                <input style={inputFieldStyle} {...register("author", { required: true })} placeholder='author' />

                <input style={inputFieldStyle} {...register("price", { required: true })} placeholder='price' />

                <input style={inputFieldStyle} {...register("img", { required: true })} placeholder='Image URL' />

                <input style={{
                    marginBottom: '5px',
                    padding: '10px',
                    color: 'blue',
                    width: '30%',
                    border: '1px solid blue',
                    borderRadius: '5px'
                }} value='Submit' type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;