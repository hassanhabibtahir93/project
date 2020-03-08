import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsersProfiles, UserAutentication } from '../../../store/action/adminActions/users/Allusers';
import './users.css'
import { Checkbox, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import  from '../../../store/action/adminActions/users/Allusers'
class AllUser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            typeAdmin: null,
            isVarified: false,

        }



    }
    componentDidMount() {
        this.props.getUsersProfiles();

    }




    changedElement = (e, i) => {
        //    console.log(e.target.value)
        if (e.target) {

            if(e.target.checked){

                this.setState({
                    isVarified: true
                })

            }else{
                this.setState({
                    isVarified:false
                })
            }

            // let auth = {
            //     isVarified: this.state.isVarified
            // }
            // this.props.UserAutentication({ ...auth })

        }


    }



    render() {
             console.log(this.state.isVarified)
        const { profile, loading } = this.props.profile;
        // console.log(profile,loading)
        let profileItems;
        if (profile === null || loading) {
            profileItems = <h1>loading.............</h1>;
        }
        else {
            if (profile === undefined) {
                profileItems = <h1>loading...........agin..</h1>;
            }
            else {







                profileItems = profile.map((item, i) => {




                    return (

                        <tr>
                            <td>{i}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.PhoneNumber}</td>
                            <td>{item.product}</td>

                            <td>
                                <input type="checkbox" onChange={this.changedElement} value={item.isVarified} />
                                {/* <Checkbox 
                            
                               onChange={this.ToggleItemas}
                               value={this.state.isVarified} 
                               
                               />
                                */}
                            </td>
                            <td>   <Button
                                variant="contained"
                                color="secondary"
                                // className={classes.button}
                                startIcon={<DeleteIcon />}
                            >
                                Delete
                            </Button></td>
                            <td><Button   color="primary" >SAVE</Button></td>
                        </tr>



                    )
                })
            }

            //   profileItems= profile.map((i,item)=>{
            //   return <h1>{item.name}</h1>
            //   })

        }


        return (

            <div style={{ marginTop: '30px' }}>
                <table>
                    <tr>
                        <th>Sr.NO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone number</th>
                        <th>Product</th>
                        <th>Varification</th>
                        <th>Delete User</th>
                        <th>Admin</th>
                    </tr>
                    {profileItems}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, { UserAutentication, getUsersProfiles })(AllUser)
