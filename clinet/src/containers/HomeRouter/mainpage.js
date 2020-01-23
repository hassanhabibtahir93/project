import React, { Component } from 'react';
import Header from '../../components/naviGation/header/header';
import SideDrawr from '../../components/naviGation/sideBar/sideDrawr';
import BackDrop from '../../components/naviGation/backdrop/backdrop';



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
    <div style={{height:"100%"}} >
  <SideDrawr show={this.state.sideDrawerOpen} />
    {backdrop}
      <Header drawerClickHandler={this.drawerToggleClickHandler}  />
    
      </div>
    
        )}
}
export default MainpPage;