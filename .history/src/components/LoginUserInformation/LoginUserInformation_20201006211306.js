import React, { useContext, useEffect, useState } from 'react';
import { HandleContext, VolunteersContext } from '../../App';
import UserInformation from '../UserInformation/UserInformation';
import './LoginUserInformation.css';
const LoginUserInformation = () => {
     
    const [volunteers,setVolunteers] = useContext(VolunteersContext);
    
    const [deleteEvent ,setDeleteEvent] =  useContext(HandleContext)


    useEffect(()=>{
          async function fetchData(){
               const request = await fetch(`http://localhost:5200/loginUserInformation?email=${volunteers.email}`,{
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
   
    return (
        <div className='container loginUser-information'>
            <div className="row">
                 {
                     deleteEvent.map(user =><UserInformation user={user} key={user._id}></UserInformation>)
                 }
            </div>
        </div>
    );
};

export default LoginUserInformation;