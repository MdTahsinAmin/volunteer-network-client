import React from 'react';
import './CreateNetwork.css'
const CreateNetwork = () => {
    return (
        <div className="create-network container">
              <div className='new-volunteer'>
                  <form action="/addVolunteer" method="post">
                      <div className='d-flex justify-content-between'>
                         <input type="text"/>
                         <input type="text"/>
                      </div>
                  </form>
              </div>
        </div>
           
    );
};

export default CreateNetwork;