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
import { Link } from "react-router-dom";
import './toobar/toolbar.css'

export default class SignUp extends Component {

  state = {
    user: {
      name: "",
      product:"",
      email: '',
      password: '',
      repeatPassword: '',
    },
  };
  componentDidMount() {
    // custom rule will have name 'isPasswordMatch'
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== this.state.user.password) {
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
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (

      <div style={{ marginTop: "20vh" }} >

        <Container component="main" maxWidth="xs">

          <div >
            <div className="Icon_signUp" >
              <div className=" aut_svg" >
                <LockOutlinedIcon />
              </div>
              <h1>Sign up</h1>
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
                    value={user.name}
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
                    value={user.email}
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
                    value={user.password}
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
                  value={user.repeatPassword}
                /></Grid>



                <Grid item xs={12} sm={12}>
                  <TextValidator
                    variant="outlined"
                    required
                    fullWidth
                    label="Product"
                    onChange={this.handleChange}
                    name="Product"
                    type="text"

                    validators={['required']}
                    errorMessages={['this field is required']}
                    value={user.product}
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

