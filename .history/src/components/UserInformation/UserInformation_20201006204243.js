import React from 'react';
import './UserInformation.css';
import extraVolunteer from '../../images/extraVolunteer.png';
const UserInformation = (props) => {
  
    const style = {
         marginRight:'5px'
    }
  

    return (
        <div className='col-md-6 exact-information'>
           <div className="row">
             <div style={style}>
                <div className="col-md-6">
                    <img className='extraVolunteer' src={extraVolunteer} alt=""/>
                </div>
                <div className="col-md-6">
                    <h4 className='event-organize'>{props.user.organize}</h4>
                    <h5 className='event-organize'>{props.user.eventDate}</h5>
                </div>
             </div>
           </div>  
        </div>
    );
};

export default UserInformation;