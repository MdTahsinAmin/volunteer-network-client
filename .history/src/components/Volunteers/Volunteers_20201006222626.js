import React, { useEffect, useState } from 'react';
import './Volunteers.css'
const Volunteers = () => {
   
    const [allVolunteers ,setAllVolunteers] = useState([]);
  

    useEffect(()=>{
       async function fetchData(){
          const request = await fetch(`http://localhost:5200/allVolunteersNetwork`);
          
          return request;
         }
         
         fetchData().then(response => response.json())
         .then(data => setAllVolunteers(data));

    },[])
   
    const handleDelete =(id) =>{
           const Volunteers = allVolunteers.filter( volunteer => volunteer._id !== id);
           setAllVolunteers(Volunteers);

           fetch(`http://localhost:5200/delete/${id}`,{
                method: 'DELETE'
           }).then(response => response.json())
           .then(data => console.log('data'));
    }

    return (
        <div className='create-network'>
            
        </div>
    );
};

export default Volunteers;