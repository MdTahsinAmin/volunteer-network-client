import axios from 'axios';
import React, { useState } from 'react';
import './CreateNetwork.css'
import { useForm } from "react-hook-form";
const CreateNetwork = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    console.log(watch("example"));

    const onSubmit = data => console.log(data);

    return (
        <div className="create-network">
             <div className="formField">
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex originToDestination '>
                <p>Event Title</p>  
                <input name="eventTitle" placeholder='Event Title' ref={register} />
                <p>Event Date</p>
                <input type="date" id="date" name="Event Date" placeholder="Enter date"
                           ref={register({ required: true })}  />
                </div>
                
                <div className='d-flex calenderForm'>
                
                 <div className='toFrom'>
                    <p>Description</p>
                    <input type="text"/>
                 </div>
                  <div>
                <p>Banner</p>  
                     <input type="file" name="" id=""/>
                  </div>
                </div>
                
              <input className='submit' type="submit" value='Submit'/>  
                </form>
             </div>
        </div>
           
    );
};

export default CreateNetwork;