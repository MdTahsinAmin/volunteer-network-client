import React from 'react';
import './AllVolunteerNetwork.css'

const AllVolunteerNetwork = (props) => {
     console.log(props.event.images);
    
    return (
         <div className='col-md-3 all-networks'>
             <img className='event-image' src={require(`../../images/${props.event.images}`)} alt=""/>
             <div className='allNetwork-footer'>
                <h4 className='footer-title'>{props.event.eventTitle}</h4>
             </div>
        </div>
    );
};

export default AllVolunteerNetwork;