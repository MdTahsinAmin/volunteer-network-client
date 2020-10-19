import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminPanel from './components/AdminPanel/AdminPanel';
import Home from './components/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import LoginHeader from './components/Header/LoginHeader';
import LoginUserInformation from './components/LoginUserInformation/LoginUserInformation';


export const VolunteersContext = createContext();
export const HandleContext = createContext();

function App() {
  
  const [volunteers,setVolunteers] = useState({
    email:'',
  });

  const [deleteEvent ,setDeleteEvent] = useState([]);

  return (
     <VolunteersContext.Provider value ={[volunteers,setVolunteers]}>
       <Router>
         <Switch>
          <Route path ='/home'>
              <div className='App2'>
               <Header navbar={true} btnShow={true}></Header>
                <Home></Home>
              </div>
          </Route>
          <PrivateRoute path="/adminPanel">
            <>
            <Header navbar={false} btnShow={false}></Header>
            <AdminPanel/>
            </>
          </PrivateRoute>
          <PrivateRoute path="/allEvents/:eventTitle">
              <div className='App'>
              <LoginHeader></LoginHeader>
              <Register></Register>
              </div>
          </PrivateRoute>
          <PrivateRoute path="/loginUserInformation">
               <HandleContext.Provider value={[deleteEvent ,setDeleteEvent]}>
                 <Header navbar={true} btnShow={false}></Header>
                 <LoginUserInformation></LoginUserInformation>
               </HandleContext.Provider>
          </PrivateRoute>
          <Route path="/login">
             <div className='App'>
               <LoginHeader></LoginHeader>
               <Login></Login>
             </div>
          </Route>
          <Route exact path="/">
            <div className='App2'>
            <Header navbar={true} btnShow={true}></Header>
            <Home></Home>
            </div>
          </Route>
      </Switch>
     </Router>
  </VolunteersContext.Provider>
  );
}

export default App;
