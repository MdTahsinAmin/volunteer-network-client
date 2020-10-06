import React from 'react';
import './UserInformation.css';
import extraVolunteer from '../../images/extraVolunteer.png';
const UserInformation = (props) => {
  
  const handleCancel = (id) =>{
     
     fetch(`http://localhost:5200/delete/${id}`,{
         method: 'DELETE'
     }).then(response => response.json())
     .then(data =>{
         
     })
   

  }
    return (
        <div className='col-md-6 exact-information'>
           <div className="row">
             <div className='middle'>
                <div className="col-md-6">
                    <img className='extraVolunteer' src={extraVolunteer} alt=""/>
                </div>
                <div className="col-md-6">
                    <h4 className='event-organize'>{props.user.organize}</h4>
                    <h5 className='event-organize'>{props.user.eventDate}</h5>
                    <button onClick={()=>handleCancel(props.user._id)} className='cancel-btn'>Cancel</button>
                </div>
             </div>
           </div>  
        </div>
    );
};

export default UserInformation;