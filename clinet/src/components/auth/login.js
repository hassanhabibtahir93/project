import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { render } from '@testing-library/react';
import { Link } from "react-router-dom";
import './toobar/toolbar.css'
import SignUp from '../auth/signUp';
import loginUser from '../../store/action/loginAction/loginaction'
import { connect } from 'react-redux'; 
class Login extends Component {

  state = {
    
      email: '',
      password: '',
     errors:{}
      };

 

  handleChange = (event) => {
   
    this.setState({[event.target.name] :event.target.value});
  }


  onSubmit=(e)=> {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }



  componentWillReceiveProps(nextProps) {

    console.log(nextProps)
    if (nextProps.auth.isAuthenticated) {

         console.log(nextProps.auth)

      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    return (

      <div style={{ marginTop: "20vh" }} >

        <Container component="main" maxWidth="xs">

          <div >
            <div className="Icon_signUp" >
              <div className="aut_svg"><LockOutlinedIcon /></div>  
              
              
              <h1>Log In</h1>
            </div>

            <ValidatorForm
              ref="form"
              onSubmit={this.onSubmit}
              onError={errors => console.log(errors)}
            >
              <Grid container spacing={2}>
               
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
                  /></Grid>
               

              </Grid>


              <Button
              style={{marginTop:"20px"}}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Log In
          </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link to='/signup' variant="body2">
                    if you have no account First SignUp
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


const mapStateToProps=(state)=>({
  errors:state.erorr,
  auth:state.auth
})

export default connect(mapStateToProps,{loginUser})(Login)