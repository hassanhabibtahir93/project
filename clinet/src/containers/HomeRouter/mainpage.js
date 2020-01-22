import React, { Component } from 'react';
import Header from '../../components/naviGation/header/header';
import SideDrawr from '../../components/naviGation/sideBar/sideDrawr';
import BackDrop from '../../components/naviGation/backdrop/backdrop';
import Home from '../../components/home/home'
import Register from '../../components/auth/signUp'
import Login from '../../components/auth/login';
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";

class MainpPage extends Component {
state={
  sideDrawerOpen:false
};
  drawerToggleClickHandler= () =>{
    this.setState((prevState)=>{

      return { sideDrawerOpen:!prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler=()=>{
this.setState({sideDrawerOpen:false})
  };
   

    render() {
      let backdrop;
  
  if(this.state.sideDrawerOpen){
  
    backdrop=<BackDrop click={this.backdropClickHandler} />
  }

        return (
          <Router>
    <div style={{height:"100%"}} >
  <SideDrawr show={this.state.sideDrawerOpen} />
    {backdrop}
      <Header drawerClickHandler={this.drawerToggleClickHandler}  />
    
      </div>
      
      <Route  exact path="/"    component={Home} />
      <Route  exact path="/signup"    component={Register}/>
      <Route  exact path="/login"    component={Login}/>
  </Router>
        )}
}
export default MainpPage;