import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Admin from './components/Admin.jsx';
import { LoginRequestProvider } from './context/loginContext';

function App() {
  return (
    <div className="App">
      <LoginRequestProvider>
        <BrowserRouter>
        <Navbar />
        <Switch>
    <Route className="route" exact path="/">
      <Home />
    </Route>
    <Route className="route" exact path="/login">
      <Login/>
    </Route>
    <Route className="route" exact path="/admin">
      <Admin />
    </Route>
    </Switch>
        </BrowserRouter>
      </LoginRequestProvider>
    </div>
  );
}

export default App;
