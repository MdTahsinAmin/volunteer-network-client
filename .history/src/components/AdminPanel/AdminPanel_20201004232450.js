import React from 'react';
import './AdminPanel.css';
import GroupIcon from '@material-ui/icons/Group';
const AdminPanel = () => {
    return (
        <div className="adminPanel-section">
            <div className="section-panel">
               <GroupIcon color="primary"></GroupIcon><span>Volunteer register list</span>
            </div>
            <div className='Volunteer-list'>
                
            </div>
        </div>
    );
};

export default AdminPanel;