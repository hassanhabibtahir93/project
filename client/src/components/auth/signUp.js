import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { render } from '@testing-library/react';
import registerUser from '../../store/action/userProfile/userPAction'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { connect } from 'react-redux'; 
import './toobar/toolbar.css'


 class SignUp extends Component {
constructor(){
  super();
  this.state = {
   
      name: "",
      product:"",
      email: '',
      password: '',
      repeatPassword: '',
      PhoneNumber:'',
      phone:''
    
  };
}
handleSubmit=(e)=>{
  e.preventDefault()
  
  const newUser = {
  name:this.state.name,
  email:this.state.email,
  password:this.state.password,
  product:this.state.product,
  PhoneNumber:this.state.PhoneNumber,
  
  errors: null
  }
  
  this.props.registerUser(newUser,this.props.history)
  
    }
  
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.password) {
        return false;
      }
      return true;
    });
  }
  componentWillUnmount() {
    // remove rule when it is not needed
    ValidatorForm.removeValidationRule('isPasswordMatch');
  }

  handleChange = (event) => {
 
    this.setState({ [event.target.name]: event.target.value });

  }


  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
 this.setState({errors:nextProps.errors})
    }
  }



  render() {
    console.log(this.state.name)
      const {errors} = this.state;
      console.log(errors)
    return (

      <div style={{ marginTop: "20vh" }} >
    
        <Container component="main" maxWidth="xs">
     
          <div >
            <div className="Icon_signUp" >
              <div className=" aut_svg" >
                <LockOutlinedIcon />
              </div>
              
              <h1>Sign up</h1>
              <h3 style={{color:"red"}} >  { errors&&<div>{errors.message}</div>}</h3>
            </div>

            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onError={errors => console.log(errors)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    type="text"

                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={this.state.name}
                  />
                </Grid>

                <Grid item xs={12}>

                  <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    value={this.state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    type="password"

                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={this.state.password}
                  />
                </Grid>
                <Grid item xs={12}> <TextValidator

                  variant="outlined"
                  required
                  fullWidth
                  label="Repeat password"
                  onChange={this.handleChange}
                  name="repeatPassword"
                  type="password"
                  validators={['isPasswordMatch', 'required']}
                  errorMessages={['password mismatch', 'this field is required']}
                  value={this.state.repeatPassword}
                /></Grid>



                <Grid item xs={12} sm={12}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    label="Product"
                    onChange={this.handleChange}
                    name="product"
                    type="text"

                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={this.state.product}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    label="Number"
                    onChange={this.handleChange}
                    name="PhoneNumber"
                    type="number"

                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={this.state.PhoneNumber}
                  />
                </Grid>



              </Grid>


              <Button
                style={{ marginTop: "20px" }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
          </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to="/login" variant="body2">
                    Already have an account? Sign in
              </Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
          
          <Box mt={5}>
          </Box>
        </Container>
      </div>)
  }
}

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
};

 const mapStateToProps=(state)=>({
  errors:state.erorr

})


export default connect(mapStateToProps,{registerUser})(SignUp)
