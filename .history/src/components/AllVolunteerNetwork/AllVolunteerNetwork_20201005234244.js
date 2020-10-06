import React from 'react';
import './AllVolunteerNetwork.css'

const AllVolunteerNetwork = (props) => {
     console.log(props.event.images);
    
     const style = {
        background: `url(), #C4C4C4`
     }

    return (
         <div className='col-md-3 all-networks' style={style}>
               <h1>Hello</h1>
        </div>
    );
};

export default AllVolunteerNetwork;