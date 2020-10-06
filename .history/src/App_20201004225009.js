import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminPanel from './components/AdminPanel/AdminPanel';
function App() {
  return (
    <div className="App">
     <Router>
      <Header navbar={true}></Header>
      <Switch>
        <Router path="/adminPanel">
        <Header navbar={false}></Header>
         <AdminPanel/>
        </Router>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
