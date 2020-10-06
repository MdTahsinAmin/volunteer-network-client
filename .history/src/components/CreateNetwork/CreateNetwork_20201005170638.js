import axios from 'axios';
import React, { useState } from 'react';
import './CreateNetwork.css'
import { useForm } from "react-hook-form";

import cloudLogo from '../../logos/cloud-upload-outline 1.png'
const CreateNetwork = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    console.log(watch("example"));

    const onSubmit = data => console.log(data);

    return (
        <div className="create-network">
             <div className="formField">
             <form onSubmit={handleSubmit(onSubmit)}>
                <div className='d-flex originToDestination '>
                  <div className='event'>
                   <h6>Event Title</h6>  
                   <input name="eventTitle" placeholder=' Enter Event Title' ref={register} />
                  </div>
                 <div>
                 <h6>Event Date</h6>
                  <input type="date" id="date" name="Event Date" placeholder="Enter date"
                         ref={register({ required: true })} />
                 </div>
                </div>
                
                <div className='d-flex descriptionBanner'>
                
                 <div className='toFrom'>
                    <h6>Description</h6>
                    <input className='description' name="description" placeholder='Enter Description' ref={register} />
                 </div>
                  <div>
                   <h6>Banner</h6>  
                     <input type="file" name="image" id="file" ref={register}/>
                     <label htmlFor="file">
                         <img className ='cloudLogo' src={cloudLogo} alt=""/>
                       <span className='upload'> Upload image</span></label>
                  </div>
                </div>
                
               <input className='submit' type="submit" value='Submit'/>  
                </form>
             </div>
        </div>
           
    );
};

export default CreateNetwork;