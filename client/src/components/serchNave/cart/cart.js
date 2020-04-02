import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './cart.css'
export default class Cart extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Button onClick={this.handleClickOpen}>
                    <AddShoppingCartIcon  fontSize="large"  style={{color:'white'}} />
                    
        </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    // style={{backgroundColor:"black"}}
                >
                <div   className="cartimg" >  
                <AddShoppingCartIcon />
                </div>

                    <DialogActions  >
         
                   
<div style={{width:"30vw",height:"40vh" ,backgroundColor:"lightBlue"}}  >
<h1>Order</h1>
<div><h2>list</h2></div>

</div>

 </DialogActions>
 <Button onClick={this.handleClose} bgColor="primary">Cancel </Button>
                </Dialog>
            </div>
        );
    }
}