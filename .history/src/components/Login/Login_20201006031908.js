import React, { useContext } from 'react';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { continueWithGoogle, initializeLoginFramwork } from './LoginManager';
import { VolunteersContext } from '../../App';

initializeLoginFramwork();

const Login = () => {

    return (
        <div className="volunteer-login">
            <h1>j</h1>
        </div>
    );
};

export default Login;