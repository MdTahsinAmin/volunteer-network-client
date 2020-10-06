import React from 'react';
import './AdminPanelInformaion.css';
import deleteLogo from '../../logos/trash-2 9.png';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button } from '@material-ui/core';
const AdminPanelInformaion = (props) => {
    return (
        <tr>
            <td>{props.volunteer.name}</td>
             <td>{props.volunteer.email}</td>
             <td>{props.volunteer.eventDate}</td>
              <td>{props.volunteer.organize}</td>
             <td> <Button
                    variant="contained"
                    color="secondary"
                     startIcon={<DeleteIcon />}
                   >
                    Delete
              </Button>
            </td>
        </tr>
    );
};

export default AdminPanelInformaion;