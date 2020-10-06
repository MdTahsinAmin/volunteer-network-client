import React from 'react';
import './AdminPanel.css';
import GroupIcon from '@material-ui/icons/Group';
const AdminPanel = () => {
    return (
        <div className="adminPanel-section">
            <div className="section-panel">
               <GroupIcon color="primary"><p>Volunteer register list</p></GroupIcon>
            </div>
            <div className='Volunteer-list'>
                
            </div>
        </div>
    );
};

export default AdminPanel;