import React from 'react';
import './CreateNetwork.css'
const CreateNetwork = () => {
    return (
        <div className="create-network">
             <div>
                 <form action="/addVolunteerEvent" method="post">
                     <div className="custom-file">
                         <input type="file" className="custom-file-input" name="" id="customFile"/>
                         <label className="custom-file-label" htmlFor="customFile"> Chosen File</label>
                     </div>
                 </form>
             </div>
        </div>
           
    );
};

export default CreateNetwork;