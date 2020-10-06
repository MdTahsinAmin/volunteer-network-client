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
            <input type='text' name="fullName"  defaultValue={volunteers.name} ref={register} placeholder='Full Name' /> <br/>
            <input type='email' name="email" defaultValue={volunteers.email} ref={register({ required: true })} placeholder='UserName or Email' /> <br/>
            <input type="date" id="date" name="eventDate" placeholder="Enter date" ref={register({ required: true })} /> <br/>
            <input type='text' name="description" ref={register} placeholder='Description' /> <br/>
            <input type='text' name="eventTitle" defaultValue={eventTitle} ref={register} placeholder='Organize books at the library.'/> <br/>
            <input className='register-btn' type="Register" />
            </form>
            </div>
        </div>
    );
};

export default Register;