import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import Container from '@material-ui/core/Container';
import {DropzoneArea} from 'material-ui-dropzone'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import '../product/product.css'
import { connect } from 'react-redux';

class Product extends Component {
    constructor() {
        super();
        this.state = {

            productname: "",
            description: "",
            category: "",
            price: "",
            discount: "",
            images: "",
            files: []

        };
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {


            //   errors: null
        }

        //   this.props.registerUser(newUser,this.props.history)

    }

    handleChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });

    }

    ImageshandleChange=(files)=>{
        this.setState({
          files: files
        });
      }
    componentDidMount() {
        ValidatorForm.addValidationRule('isTruthy', value => value);
    }

  

    render() {



        //  const { errorMessages,validators } = this.props;

        return (
            <div style={{ marginTop: "20vh" }} >
                <Grid item xs={false} sm={4} md={7} />
                <Container component="main" maxWidth="xs">

                    <div >
                        <div className="Icon_signUp" >
                            <div className=" aut_svg" >
                                <LockOutlinedIcon />
                            </div>

                            <h1>Your Product</h1>

                        </div>

                        <ValidatorForm
                            ref="form"
                            onSubmit={this.handleSubmit}
                            onError={errors => console.log(errors)}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6}>
                                    <TextValidator
                                        variant="outlined"


                                        label="Price"
                                        onChange={this.handleChange}
                                        name="price"
                                        type="Number"

                                        validators={['isTruthy']}
                                        errorMessages={['this field is required']}
                                        value={this.state.price}
                                    />
                                </Grid>
                                <Grid item xs={6} sm={6}>
                                    <TextValidator
                                        variant="outlined"


                                        label="Discount Value"
                                        onChange={this.handleChange}
                                        name="discount"
                                        type="Number"

                                        validators={['isTruthy']}
                                        errorMessages={['this field is required']}
                                        value={this.state.price}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <TextValidator
                                        variant="outlined"


                                        fullWidth
                                        label="Product Name"
                                        onChange={this.handleChange}
                                        name="productname"
                                        type="text"

                                        validators={['isTruthy']}
                                        errorMessages={['this field is required']}
                                        value={this.state.productname}
                                    />
                                </Grid>


                                <Grid item xs={12} sm={12}>
                                    <TextValidator

                                        label="Discription"
                                        type="text"
                                        placeholder="Discription"

                                        fullWidth
                                        validators={['isTruthy']}
                                        errorMessages={['this field is required']}
                                        variant="outlined"
                                        value={this.state.discription}
                                    />
                                </Grid>
                              

                                    <Grid item xs={12} sm={12}>


                                    <div className="slecConteinre">
          <select  className = 'selectBox'  >
                                <option value="punjab">Punjab</option>
                                <option value="sindh">Sindh</option>
                                <option value="kpk">KPK</option>
                                <option value="gilgit baltistan">Gilgit Baltistan</option>
                                <option value="ajk">AJK</option>
                            </select>
                        </div>



                               
                                    </Grid>

<Grid>

<DropzoneArea 
        onChange={this.ImageshandleChange}
        />
</Grid>

                            


                                {/*               
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
                </Grid> */}



                            </Grid>


                            <Button
                                style={{ marginTop: "20px" }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Submit  your Product
          </Button>

                        </ValidatorForm>
                    </div>

                    <Box mt={5}>
                    </Box>
                </Container>
            </div>)
    }
}

Product.propTypes = {
    //   registerUser: PropTypes.func.isRequired,
    // auth: PropTypes.object.isRequired,
    // errors:PropTypes.object.isRequired
};

//  const mapStateToProps=(state)=>({
//   errors:state.erorr

// })


export default connect()(Product)
