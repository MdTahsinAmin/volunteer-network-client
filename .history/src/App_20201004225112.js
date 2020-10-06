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
      <Switch>
        <Route path ='/home'>
         <Header navbar={true}></Header>
        </Route>
        <Route path="/adminPanel">
        <Header navbar={false}></Header>
         <AdminPanel/>
        </Route>
        <Route exact path="/">
           <Header navbar={true}></Header>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
