import React from 'react';
import './AdminPanel.css';
import GroupIcon from '@material-ui/icons/Group';

const AdminPanel = () => {
    return (
        <div className="adminPanel-section">
            <div className="section-panel">
              <div className ='group-panel'>
              <GroupIcon fontSize="small" color="primary"></GroupIcon>Volunteer register list
              </div>
            </div>
            <div className='Volunteer-list'>
                
            </div>
        </div>
    );
};

export default AdminPanel;