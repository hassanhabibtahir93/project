
  import React, { Component } from 'react'
  import Home from '../../components/home/home'
import Register from '../../components/auth/signUp'
import Login from '../../components/auth/login';
import Dashboard from '../../components/Dashboard/dashboard'
import MainHeader from '../../containers/Header/header';
  import {
     Router,
  
    Route,
    Switch
  
  } from "react-router-dom";
import history from '../../components/history/history'
import ProvatieRoutes from '../../components/privavte/private'
  
  export default class Routes extends Component {
    render() {
      return (
        <Router history={history}>
    <MainHeader/>
      <Route  exact path="/"    component={Home} />
      <Route  exact  path="/signup"    component={Register}/>
      <Route   exact path="/login"    component={Login}/>
      <Switch>
      <ProvatieRoutes  exact path="/dashboard"  component={Dashboard} />
      </Switch>

     </Router>
          
    
      )
    }
  }
  