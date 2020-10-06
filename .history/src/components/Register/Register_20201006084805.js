import React, { useContext } from 'react';
import './Register.css';
import { useForm } from "react-hook-form";
import { VolunteersContext } from '../../App';
import { useParams } from 'react-router-dom';

const Register = () => {
    
    const [volunteers,setVolunteers] = useContext(VolunteersContext);
     
    const {eventTitle} = useParams();

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="register">
            <h2 className="resister-volunteer">Register as a Volunteer</h2>
            <div className='resister-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input 
             className='input-fields'
             type='text'
             name="fullName" 
             defaultValue={volunteers.name}
             ref={register}
             placeholder='Full Name' 
                /> <br/>
            </form>
            </div>
        </div>
    );
};

export default Register;