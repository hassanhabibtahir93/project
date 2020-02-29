import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsersProfiles } from '../../../store/action/adminActions/users/Allusers';
import './users.css'
import { Checkbox } from '@material-ui/core';
class AllUser extends Component {


    componentDidMount() {
        this.props.getUsersProfiles();
    }


    render() {


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
console.log(item)
                   return(
                    
                    <tr>
                   <td>{i}</td>
                   <td>{item.name}</td>
                   <td>{item.email}</td>
                   <td>{item.PhoneNumber}</td>
                   <td>{item.product}</td>
                   
                   <td><Checkbox  value={item.isVarified} /></td>
                    </tr>
                   
                

                   )
                })
            }

            //   profileItems= profile.map((i,item)=>{
            //   return <h1>{item.name}</h1>
            //   })

        }


        return (

            <div  style={{marginTop:'30px'}}>
               <table>
                    <tr>
                      <th>Sr.NO</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone number</th>
                       <th>Product</th>  
                       <th>Varification</th>
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

export default connect(mapStateToProps, { getUsersProfiles })(AllUser)
