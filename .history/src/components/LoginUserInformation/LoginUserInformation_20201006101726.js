import React, { useContext, useEffect, useState } from 'react';
import { VolunteersContext } from '../../App';
import './LoginUserInformation.css';
const LoginUserInformation = () => {
     
    const [volunteers,setVolunteers] = useContext(VolunteersContext);
    
    const [loginUser ,setLoginUser] = useState([]);


    useEffect(()=>{

    },[])
    

    return (
        <div className='container loginUser-information'>
            <div className="row">
                 
            </div>
        </div>
    );
};

export default LoginUserInformation;