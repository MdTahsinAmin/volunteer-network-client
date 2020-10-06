import React, { useContext } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { continueWithGoogle, initializeLoginFramwork } from './LoginManager';
import { VolunteersContext } from '../../App';
import { Link } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

initializeLoginFramwork();

const Login = () => {
    
    const history = useHistory();

    const location = useLocation();

    const [volunteers,setVolunteers] = useContext(VolunteersContext);

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () =>{
      
        continueWithGoogle().then(res=>{
            const login = {...volunteers,...res};
            setVolunteers(login);
            history.replace(from);
        })
    }
    
    return (
        <div className="volunteer-login">
            <div className='login-page'>
                 <h2 className='login-with'>Login With</h2>
                 <div className="google" role='button' onClick={googleSignIn}><span className='continue-google'>Continue with Google</span></div>
                 <p className='account'>Don’t have an account? <Link>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;