import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css'
import volunteerLogo from '../../logos/volunteer.png';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { MessageContext, VolunteersContext } from '../../App';

// Material Button

const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #3F90FC 30%, #3F90FC 90%)',
    border: 0,
    borderRadius: '6px',
    color: 'white',
    height: 48,
    padding: '14px 43px',
    marginRight:'15px',
    marginLeft:'9px',
    cursor:'pointer'
  });
 
  const AdminBtn = styled(Button)({
    background: 'linear-gradient(45deg, #434141 30%, #434141 90%)',
    border: 0,
    borderRadius: '6px',
    color: 'white',
    height: 48,
    padding: '14px 43px',
    marginRight:'15px',
    cursor:'pointer'
  })

const Header = (props) => {
    
    const [volunteers,setVolunteers] = useContext(VolunteersContext);
    const [meg ,setMeg] = useContext(MessageContext);  

    const history = useHistory();

    const handleAdminPanel = () =>{
         history.push('/adminPanel');
    }


    return (
      <div className="header">
          <div className={props.navbar ? "container" : 'adminPanel'}>
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to='/home' className="navbar-brand"><img className={props.navbar ?'volunteerLogo':'Logo'} src={volunteerLogo} alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {
                true ? <h5 className="volunteer-title">Add Event</h5>:<h5 className="volunteer-title">Volunteer register list</h5>
            }
            
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
               { props.navbar && <li className="nav-item">
                    <Link className="nav-link item-nav">Home</Link>
                </li>}
                {props.navbar &&<li className="nav-item">
                    <Link className="nav-link item-nav">Donation</Link>
                </li>}
               { props.navbar && <li className="nav-item">
                    <Link className="nav-link item-nav">Events</Link>
                </li>}
                { props.navbar && <li className="nav-item">
                    <Link className="nav-link item-nav">Blog</Link>
                </li>}
                
              { (props.navbar && props.btnShow)&& <li className="nav-item">
                    <MyButton>Register</MyButton>
                </li>
              }
                {(props.navbar && props.btnShow)&& <li className="nav-item">
                   <AdminBtn
                     onClick={handleAdminPanel}
                   >Admin
                   </AdminBtn>
                </li>
                }
                {(props.navbar && volunteers.isLogin) && <li className="nav-item">
                <Link className="nav-link item-nav"> {volunteers.name}</Link>
                 </li>}
                </ul>
            </div>

            </nav>
      </div>
   </div>
    );
};

export default Header;