import React from 'react';
import './CreateNetwork.css'
const CreateNetwork = () => {
    return (
        <div className="create-network">
              
                  <form action="/addVolunteer" method="post">
                      <div className='d-flex justify-content-between'>
                         <input type="text"/>
                         <input type="text"/>
                      </div>
                  </form>
              
        </div>
           
    );
};

export default CreateNetwork;