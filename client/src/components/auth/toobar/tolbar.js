import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MenuItem from '@material-ui/core/MenuItem';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Logout from '../../../store/action/logout/logout'
import { connect } from 'react-redux'; 
import Aux from '../../../hoc/hoc'
import {
   
    Link
  } from "react-router-dom";
class ToolBar extends React.Component {
    state = {
        open: false,
        name:''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };



    componentWillReceiveProps(nextProps) {


        if (nextProps.auth.isAuthenticated) {
    

                  this.setState({
                      name:nextProps.auth.user.name
                  })
        
          
    
         
        }
    
      }




      onLogoutClick=(e)=>{
        e.preventDefault();
    
        this.props.Logout();
      }


    render() {

        const {isAuthenticated}= this.props.auth



const Logout=(
<div>

<span>{this.state.name}</span>
    <button 
    onClick={this.onLogoutClick}>logout</button>
</div>
)

        const loginFirtst=(
<div className="auth" >
          <div className="aut_svg" >      
      <MenuItem onMouseOver={this.handleToggle} onClick={this.handleClose}>
          
    <Link  className="links_auth"  to="/signup"> <span className="Icon_sign" ><SupervisorAccountIcon/></span> <Button  type="button">
     SignUp
</Button></Link></MenuItem> 
      <MenuItem onMouseOver={this.handleToggle} onClick={this.handleClose}> <Link className="links_auth"   to="/login"><span className="Icon_sign" ><LockOpenIcon/></span><Button>Login</Button></Link></MenuItem> 
    
 </div>
          </div>


        )

        return (
            <Aux>
            <div>
                <Button onClick={this.handleClickOpen}>
                   <div><img src="https://img.icons8.com/ultraviolet/40/000000/lock.png"/></div>
        </Button>
                <Dialog  
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                <div   className="cartimg" >  
                </div>
                  
                    <DialogActions>
            
          {isAuthenticated?Logout:loginFirtst}
                   
                    </DialogActions>
                </Dialog>
            </div>
            </Aux>
        );
    }
}

const mapStateToProps=(state)=>({
    errors:state.erorr,
    auth:state.auth
  })
  
  export default connect(mapStateToProps,{Logout})(ToolBar)