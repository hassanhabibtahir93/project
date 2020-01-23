
  import React, { Component } from 'react'
  import Home from '../../components/home/home'
import Register from '../../components/auth/signUp'
import Login from '../../components/auth/login';
import Dashboard from '../../components/Dashboard/dashboard'
  import {
    BrowserRouter as Router,
  
    Route,
  
  } from "react-router-dom";


  
  export default class Routes extends Component {
    render() {
      return (
     <Router>


    <Route  exact path="/"    component={Home} />
      <Route  exact path="/signup"    component={Register}/>
      <Route  exact path="/login"    component={Login}/>
      <Route  exact path="/dashboard"  component={Dashboard} />


     </Router>
          
    
      )
    }
  }
  