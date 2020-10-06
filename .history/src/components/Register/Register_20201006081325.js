import React from 'react';
import './Register.css';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="register">
            <h2 className="resister-volunteer">Register as a Volunteer</h2>
            <div className='resister-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input name="example" defaultValue="test" ref={register} />
            <input name="exampleRequired" ref={register({ required: true })} />
            <input type="submit" />
            </form>
            </div>
        </div>
    );
};

export default Register;