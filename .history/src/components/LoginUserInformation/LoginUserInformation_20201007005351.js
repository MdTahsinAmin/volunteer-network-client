import React, { useContext, useEffect, useState } from 'react';
import { HandleContext, VolunteersContext } from '../../App';
import UserInformation from '../UserInformation/UserInformation';
import './LoginUserInformation.css';
const LoginUserInformation = () => {
     
    const [volunteers,setVolunteers] = useContext(VolunteersContext);
    
    const [deleteEvent ,setDeleteEvent] =  useContext(HandleContext)

    useEffect(()=>{
          async function fetchData(){
               const request = await fetch(`https://safe-retreat-96393.herokuapp.com/loginUserInformation?email=${volunteers.email}`,{
                   method: 'GET',
                   headers:{
                       'Content-Type': 'application/json',
                       authorization: `Bearer ${sessionStorage.getItem('token')}`
                    }
               })
               return request;
          }

          fetchData().then(response => response.json())
          .then(data => setDeleteEvent(data))
    },[])
    
    // deleteEvent 

    const handleCancel = (id) =>{

        const fixedEvent =  deleteEvent.filter(event => event._id!==id);
                setDeleteEvent(fixedEvent);
        fetch(`https://safe-retreat-96393.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        }).then(response => response.json())
        .then(data =>{
            if(data.result){
               
            }
        })
   
     }

    return (
        <div className='container loginUser-information'>
            <div className="row">
                 {
                     deleteEvent.map(user =><UserInformation user={user} key={user._id} handleCancel={handleCancel}></UserInformation>)
                 }
            </div>
        </div>
    );
};

export default LoginUserInformation;