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


export const VolunteersContext = createContext();


function App() {
  
  const [volunteers,setVolunteers] = useState();

  return (
     <VolunteersContext Provider={[volunteers,setVolunteers]}>
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
          <Route exact path="/">
            <div className='App2'>
            <Header navbar={true}></Header>
            <Home></Home>
            </div>
          </Route>
      </Switch>
     </Router>
  </VolunteersContext>
  );
}

export default App;
