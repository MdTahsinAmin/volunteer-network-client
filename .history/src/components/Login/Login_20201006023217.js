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
        <div>
            
        </div>
    );
};

export default Login;