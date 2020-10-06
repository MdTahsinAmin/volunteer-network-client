import React, { useState } from 'react';
import './CreateNetwork.css'
const CreateNetwork = () => {
   
    const [file , setFile] = useState("");

    const [fileName , setFileName] = useState('Chosen File')
 

    return (
        <div className="create-network">
             <div>
                 <form action="/addVolunteerEvent" method="post">
                     <div className="custom-file">
                         <input type="file" className="custom-file-input" name="" id="customFile"/>
                          <label className="custom-file-label" htmlFor="customFile">{fileName}</label>
                     </div>
                     <input type="submit" value="Upload" className="btn btn-primary mt-4"/>
                 </form>
             </div>
        </div>
           
    );
};

export default CreateNetwork;