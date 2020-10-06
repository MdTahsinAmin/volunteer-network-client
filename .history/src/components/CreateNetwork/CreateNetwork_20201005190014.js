import axios from 'axios';
import React, { useState } from 'react';
import './CreateNetwork.css'
import { useForm } from "react-hook-form";

import cloudLogo from '../../logos/cloud-upload-outline 1.png'
const CreateNetwork = () => {
     
    const [fileName , setFileName] = useState('Upload image');
     
    const { register, handleSubmit, watch, errors } = useForm();
    //console.log(watch("example"));

    const onChange = (event) =>{
         setFileName(event.target.files[0].name);
    }


    const onSubmit = data =>{

        const formData = new FormData();
        formData.append('file',file)
        const newEvent  = {
            eventTitle : data.eventTitle,
            eventDate : data.eventDate,
            description : data.description
        }
        //console.log(newEvent);
        
        fetch('http://localhost:5200/addNewEvent',{
            method:'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({newEvent,formData})
        }).then(response => response.json())
        .then(data => console.log(data));
    }
    
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
                  <input type="date" id="date" name="eventDate" placeholder="Enter date"
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
                     <input type="file" name="image" id="file" ref={register} onChange={onChange}/>
                     <label htmlFor="file">
                         <img className ='cloudLogo' src={cloudLogo} alt=""/>
                         <span className='upload'> {fileName}</span></label>
                  </div>
                </div>
                
               <input className='submit' type="submit" value='Submit'/>  
                </form>
             </div>
        </div>
           
    );
};

export default CreateNetwork;