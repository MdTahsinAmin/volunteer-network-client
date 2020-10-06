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


export const VolunteersContext = createContext();


function App() {
  
  const [volunteers,setVolunteers] = useState();

  return (
     <VolunteersContext.Provider value ={[volunteers,setVolunteers]}>
       <Router>
         <Switch>
          <Route path ='/home'>
              <div className='App2'>
              <Header navbar={true}></Header>
                <Home></Home>
              </div>
          </Route>
          <Route path="/adminPanel">
            <div>
            <Header navbar={false}></Header>
            <AdminPanel/>
            </div>
          </Route>
          <PrivateRoute path="/allEvents/:eventTitle">
             <Register></Register>
          </PrivateRoute>
          <Route path="/login">
             <div>
               <LoginHeader></LoginHeader>
               <Login></Login>
             </div>
          </Route>
          <Route exact path="/">
            <div className='App2'>
            <Header navbar={true}></Header>
            <Home></Home>
            </div>
          </Route>
      </Switch>
     </Router>
  </VolunteersContext.Provider>
  );
}

export default App;
