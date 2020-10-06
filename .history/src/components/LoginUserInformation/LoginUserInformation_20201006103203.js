import React, { useContext, useEffect, useState } from 'react';
import { VolunteersContext } from '../../App';
import './LoginUserInformation.css';
const LoginUserInformation = () => {
     
    const [volunteers,setVolunteers] = useContext(VolunteersContext);
    
    const [loginUser ,setLoginUser] = useState([]);


    useEffect(()=>{
          async function fetchData(){
               const request = await fetch(`http://localhost:5200/loginUserInformation?email=${volunteers.email}`)
               
               return request;
          }

          fetchData().then(response => response.json())
          .then(data => setLoginUser(data))
    },[])
    

    return (
        <div className='container loginUser-information'>
            <div className="row">
                 
            </div>
        </div>
    );
};

export default LoginUserInformation;