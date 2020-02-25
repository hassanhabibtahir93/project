
  import React, { Component } from 'react'
  import Home from '../../components/home/home'
import Register from '../../components/auth/signUp'
import Login from '../../components/auth/login';
import Dashboard from '../../components/Dashboard/dashboard'
import MainHeader from '../../containers/Header/header';
import resetEmail from '../../components/auth/reset/resetemail'
import Resetpassword from '../../components/auth/reset/resetpassword'
  import {
     Router,
  
    Route,
    Switch
  
  } from "react-router-dom";
import history from '../../components/history/history'
import ProvatieRoutes from '../../components/privavte/private'
import Admin from '../../components/adminpanal/admin'
  
  export default class Routes extends Component {
    render() {
      return (
        <Router history={history}>
    <MainHeader/>
      <Route  exact path="/"    component={Home} />
      <Route  exact  path="/signup"    component={Register}/>
      <Route   exact path="/login"    component={Login}/>
      <Route   exact path="/login/forgot"   component={resetEmail} />
      <Route exact  path="/reset/:token" component={Resetpassword}
      // /:token
                />
      <Switch>
      <ProvatieRoutes  exact path="/dashboard"  component={Dashboard} />
      <ProvatieRoutes  exact path="/Admin"  component={Admin} />
      </Switch>

     </Router>
          
    
      )
    }
  }
  