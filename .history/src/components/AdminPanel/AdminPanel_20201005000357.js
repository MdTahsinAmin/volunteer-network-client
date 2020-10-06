import React from 'react';
import './AdminPanel.css';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
const AdminPanel = () => {
    return (
        <div className="adminPanel-section">
            <div className="section-panel">
              <div className ='group-panel'>
              <Link to='/volunteerList' className='volunteerLink'><GroupIcon fontSize="small"></GroupIcon><span> Volunteer register list</span></Link>
              </div>
              <div className="group-panel">
                  <Link to='createNewProject' className='volunteerLink'><AddIcon fontSize="small"></AddIcon><span>Add Event</span></Link>
              </div>
            </div>
            <div className='Volunteer-list'>
                
            </div>
        </div>
    );
};

export default AdminPanel;