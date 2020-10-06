import React from 'react';
import './AdminPanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
const AdminPanel = () => {
    return (
        <div className="adminPanel-section">
            <div className="section-panel">
              <FontAwesomeIcon icon={faUsers}></FontAwesomeIcon><p>Volunteer register list</p>
            </div>
            <div className='Volunteer-list'>
                
            </div>
        </div>
    );
};

export default AdminPanel;