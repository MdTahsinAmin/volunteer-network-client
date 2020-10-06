import React from 'react';
import './AllVolunteerNetwork.css'

const AllVolunteerNetwork = (props) => {
     console.log(props.event.images);
    
    return (
         <div className='col-md-3 all-networks'>
             <img src={require(`../../images/${props.event.images}`)} alt=""/>
        </div>
    );
};

export default AllVolunteerNetwork;