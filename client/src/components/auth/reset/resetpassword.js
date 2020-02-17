import React, { Component } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import resetEmailUser from '../../../store/action/resetAction/resetaction'
import axios from 'axios';
import { connect } from 'react-redux';
import ResetpasswordUser from '../../../store/action/resetAction/resetpasswordaction'

class Resetpassword extends Component {




    state = {

        password: '',
        repeatPassword: '',
        errors:''
    };

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

    handleChanged = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }


    onSubmit = (e) => {
        e.preventDefault();
        const token = this.props.match.params.token;
console.log('token',token)
        const userData = {
            password:this.state.password,

        };
      ResetpasswordUser({...userData,token})

    }

    componentWillReceiveProps(nextProps) {



        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
            console.log(this.state.errors)

        }
    }
// componentDidMount()
// {

//     console.log("token is",this.props.token)
// }



    render() {

        console.log("token is",this.props)
        return (
            <div style={{ marginTop: "20vh" }} >
                <Container component="main" maxWidth="xs" >

                    <ValidatorForm
                        ref="form"
                        onSubmit={this.onSubmit}
                        onError={errors => console.log(errors)}
                    >
                        <Grid container spacing={2} >
                            <h4 style={{ color: "red" }} >{this.state.errors.message}</h4>
                            <Grid item xs={12}>
                                <TextValidator
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="Password"
                                    onChange={this.handleChanged}
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
                                onChange={this.handleChanged}
                                name="repeatPassword"
                                type="password"
                                validators={['isPasswordMatch', 'required']}
                                errorMessages={['password mismatch', 'this field is required']}
                                value={this.state.repeatPassword}
                            /></Grid>


                            <Button
                                style={{ marginTop: "20px" }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Send To Email
          </Button>

                        </Grid>
                    </ValidatorForm>


                </Container>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    errors: state.erorr,
})
export default connect(mapStateToProps,ResetpasswordUser )(Resetpassword)

// { ResetpasswordUser }