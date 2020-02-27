import React, { Component } from 'react';
import {connect} from 'react-redux' 
import {getUsersProfiles} from '../../../store/action/adminActions/users/Allusers'
 class AllUser extends Component {
    componentDidMount() {
        this.props.getUsersProfiles();
      }
    

    render() {

    
        // console.log(this.props.profile)


        return (
            <div style={{marginTop:"15px"}}>
               <h1>hi hassan </h1> 
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    profile:state.profile
})

export default connect(mapStateToProps,{getUsersProfiles})(AllUser)
