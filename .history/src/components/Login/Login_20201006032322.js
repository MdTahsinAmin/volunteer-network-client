import React, { useContext } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { continueWithGoogle, initializeLoginFramwork } from './LoginManager';
import { VolunteersContext } from '../../App';
import { Link } from '@material-ui/core';

initializeLoginFramwork();

const Login = () => {

    return (
        <div className="volunteer-login">
            <div className='login-page'>
                 <h2 className='login-with'>Login With</h2>
                 <div></div>
                 <p>Don’t have an account? <Link>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;