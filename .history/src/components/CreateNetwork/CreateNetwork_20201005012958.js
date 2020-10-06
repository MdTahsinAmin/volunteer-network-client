import React from 'react';
import './CreateNetwork.css'
const CreateNetwork = () => {
    return (
        <div className="create-network">
             <div>
                 <form action="/addVolunteerEvent" method="post">
                     <div className='d-flex justify-content-between'>
                         <div>
                          <p>Event Title</p>
                          <input c type="text"/>
                         </div>
                         <div>
                          <p>Event Date</p>
                          <input type="text"/>
                         </div>
                     </div>
                     <div className='d-flex justify-content-between'>
                         <div>
                          <p>Description</p>
                          <input type="text"/>
                         </div>
                         <div>
                          <p>Banner</p>
                           <input type="file" name="" id=""/>
                         </div>
                     </div>
                 </form>
             </div>
        </div>
           
    );
};

export default CreateNetwork;