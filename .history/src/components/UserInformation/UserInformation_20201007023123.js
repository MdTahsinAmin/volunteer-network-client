import React, { useContext } from 'react';
import './UserInformation.css';
import extraVolunteer from '../../images/extraVolunteer.png';
import { HandleContext } from '../../App';
const UserInformation = (props) => {
  
    const [deleteEvent ,setDeleteEvent] =  useContext(HandleContext)

    return (
        <div className='col-md-6 exact-information'>
           <div className="row">
           <div className="col-md-6">
                    <img className='extraVolunteer' src={extraVolunteer} alt=""/>
                </div>
                <div className="col-md-6">
                    <h4 className='event-organize'>{props.user.organize}</h4>
                    <h5 className='event-organize'>{props.user.eventDate}</h5>
                    <button onClick={()=>props.handleCancel(`${props.user._id}`)} className='cancel-btn'>Cancel</button>
                </div>
           </div>  
        </div>
    );
};

export default UserInformation;