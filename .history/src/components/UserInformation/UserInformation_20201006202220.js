import React from 'react';
import './UserInformation.css';
import extraVolunteer from '../../images/extraVolunteer.png';
const UserInformation = (props) => {
    return (
        <div className='col-md-6 exact-information'>
           <div className="row">
               <div className="col-md-6">
                   <img className='extraVolunteer' src={extraVolunteer} alt=""/>
               </div>
               <div className="col-md-6">
                  <h4>{props.user.organize}</h4>
                  <h5>{props.user.eventDate}</h5>
               </div>
           </div>
             
        </div>
    );
};

export default UserInformation;