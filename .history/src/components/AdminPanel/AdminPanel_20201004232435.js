import React from 'react';
import './AdminPanel.css';
import GroupIcon from '@material-ui/icons/Group';
const AdminPanel = () => {
    return (
        <div className="adminPanel-section">
            <div className="section-panel">
               <GroupIcon color="primary"></GroupIcon><p>Volunteer register list</p>
            </div>
            <div className='Volunteer-list'>
                
            </div>
        </div>
    );
};

export default AdminPanel;