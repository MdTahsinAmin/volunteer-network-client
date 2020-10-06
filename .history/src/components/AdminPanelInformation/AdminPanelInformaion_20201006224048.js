import React from 'react';
import './AdminPanelInformaion.css';
import deleteLogo from '../../logos/trash-2 9.png';
const AdminPanelInformaion = (props) => {
    return (
        <tr>
            <td>{props.volunteer.name}</td>
             <td>{props.volunteer.email}</td>
             <td>{props.volunteer.eventDate}</td>
              <td>{props.volunteer.organize}</td>
             <td><img className='deleteLogo' src={deleteLogo} alt=""/></td>
        </tr>
    );
};

export default AdminPanelInformaion;