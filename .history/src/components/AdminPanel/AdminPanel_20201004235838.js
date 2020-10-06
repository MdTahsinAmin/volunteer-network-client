import React from 'react';
import './AdminPanel.css';
import GroupIcon from '@material-ui/icons/Group';
import addUserIcon  from '../../logos/plus 1.png'
import { Link } from 'react-router-dom';
const AdminPanel = () => {
    return (
        <div className="adminPanel-section">
            <div className="section-panel">
              <div className ='group-panel'>
              <Link to='/volunteerList'><GroupIcon fontSize="small"></GroupIcon><span> Volunteer register list</span></Link>
              </div>
              <div className="group-panel">
                  <Link to='createNewProject'><img src={addUserIcon} alt=""/> <span>Add Event</span></Link>
              </div>
            </div>
            <div className='Volunteer-list'>
                
            </div>
        </div>
    );
};

export default AdminPanel;