import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import volunteerLogo from '../../logos/volunteer.png';
const Header = () => {
    return (
      <div className="header">
          <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to={'/home'} className="navbar-brand"><img className='volunteerLogo' src={volunteerLogo} alt=""/></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link">Link</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled">Disabled</Link>
      </li>
    </ul>
  </div>
</nav>
 </div>
</div>
    );
};

export default Header;