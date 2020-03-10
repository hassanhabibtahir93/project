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
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './toobar/toolbar.css'
import SignUp from '../auth/signUp';
import loginUser from '../../store/action/loginAction/loginaction'
import { connect } from 'react-redux'; 
import resetEmail from '../auth/reset/resetemail';
// import axios from 'axios';
import Admin from '../adminpanal/admin';
class Login extends Component {

  state = {
    
      email: '',
      password: '',
     errors:''
      };

 

  handleChange = (event) => {
   
    this.setState({[event.target.name] :event.target.value});
  }

 
  onSubmit=(e)=> {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,

       token : this.props.match.params.token
    
      };
console.log(userData)
    this.props.loginUser(userData);

    


//  const token = this.props.match.params.token;
        // axios.post('/api/users/login/'+token,userData).then((res)=>{
        //     console.log("backend",res)
        //     history.push('/login');
        // })
      


  }



  componentWillReceiveProps(nextProps) {


    if (nextProps.auth.isAuthenticated) {
           
         if(nextProps.auth.user.Admin){
          this.props.history.push('/Admin');

         }else{
          this.props.history.push('/dashboard');
         }

     
    }

    if (nextProps.errors) {
      this.setState({errors:nextProps.errors})
      console.log(this.state.errors)

    }
  }


  componentDidMount() {
    ValidatorForm.addValidationRule('isTruthy', value => value);
}


  render() {

  
{console.log(this.state.errors)}
    return (

      <div style={{ marginTop: "20vh" }} >
                    
    
        <Container component="main" maxWidth="xs">
       
          <div >
            <div className="Icon_signUp" >
              <div className="aut_svg"><LockOutlinedIcon /></div>  
              
              
              <h1>Log In</h1>
              <h4 style={{color:"red"}} >{this.state.errors.message}</h4>
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
                    // required
                    fullWidth
                    value={this.state.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextValidator
                    variant="outlined"
                    // required
                    fullWidth
                    label="Password"
                    onChange={this.handleChange}
                    name="password"
                    type="password"

                    validators={['isTruthy']}
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
                  <Link to="/getEmail/forgot">Forgot your password?
              </Link>
              </Grid>
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



Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps=(state)=>({
  errors:state.erorr,
  auth:state.auth
})

export default connect(mapStateToProps,{loginUser})(Login)