import React, { useContext, useState } from 'react';
import './AdminPanel.css';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Volunteers from '../Volunteers/Volunteers';
import CreateNetwork from '../CreateNetwork/CreateNetwork';
import { MessageContext } from '../../App';
const AdminPanel = () => {
   
  

    const [stateChange , setStateChange] = useState({
         groupList : false,
         addEvent : false,
         formal:true
    });
   
    const handleGroupList = () =>{
          const newState = {...stateChange};
          newState.groupList = true;
          newState.addEvent = false;
          newState.formal =  false;
          setStateChange(newState)
    }
    
    const handleAddEvent = () =>{
        const newState = {...stateChange};
        newState.groupList = false;
        newState.addEvent = true;
        newState.formal =  false;
        setStateChange(newState)
    }

    return (
        <div className="adminPanel-section">
            <div className="section-panel">
              <div className ='group-panel'>
              <Link onClick={handleGroupList} className='volunteerLink'><GroupIcon fontSize="small"></GroupIcon><span> Volunteer register list</span></Link>
              </div>
              <div className="group-panel">
                  <Link onClick={handleAddEvent} className='volunteerLink'><AddIcon fontSize="small"></AddIcon><span>Add Event</span></Link>
              </div>
            </div>
            <div className='Volunteer-list'>
                {stateChange.formal && <Volunteers></Volunteers>}
                 {
                     (stateChange.groupList && !stateChange.addEvent) &&
                        <div>
                            <Volunteers></Volunteers> 
                        </div>
                 }
                 {
                      (!stateChange.groupList && stateChange.addEvent) && <div className='container-fluid'>
                          <CreateNetwork></CreateNetwork>
                      </div> 
                 }
            </div>
        </div>
    );
};

export default AdminPanel;