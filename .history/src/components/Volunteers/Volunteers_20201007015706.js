import React, { useEffect, useState } from 'react';
import './Volunteers.css'

import AdminPanelInformaion from '../AdminPanelInformation/AdminPanelInformaion';


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

           fetch(`https://safe-retreat-96393.herokuapp.com/delete/${id}`,{
                method: 'DELETE'
           }).then(response => response.json())
           .then(data => console.log('data'));
    }

    return (
        <div className='create-network'>
            <table>
                <tr className='table-header'>
                    <th>Name</th>
                    <th>Email Id</th>
                    <th>Registration Date</th>
                    <th>Volunteer List</th>
                    <th>Action</th>
                </tr>
                {
                    allVolunteers.map(volunteer => <AdminPanelInformaion volunteer={volunteer} key={volunteer._id} handleDelete={handleDelete}></AdminPanelInformaion>)
                }
            </table>
        </div>
    );
};

export default Volunteers;