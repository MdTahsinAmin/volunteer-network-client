import React, { useContext, useEffect, useState } from 'react';
import { VolunteersContext } from '../../App';
import './LoginUserInformation.css';
const LoginUserInformation = () => {
     
    const [volunteers,setVolunteers] = useContext(VolunteersContext);
    
    const [loginUser ,setLoginUser] = useState([]);


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
          .then(data => setLoginUser(data))
    },[])
   
    console.log(loginUser);
 
    return (
        <div className='container loginUser-information'>
            <div className="row">
                 
            </div>
        </div>
    );
};

export default LoginUserInformation;