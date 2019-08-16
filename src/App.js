import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";


import HomeLayout from './components/home/index';



import 'bootstrap/dist/css/bootstrap.min.css';
///socket.io/socket.io.js

//VideoCallPopUpLayout

function App() {
    return (
      
      <Router > 
        <Switch>
          <Route exact path="/" component={HomeLayout} />
        
          
        </Switch>
      </Router>
    );
}

export default App;
