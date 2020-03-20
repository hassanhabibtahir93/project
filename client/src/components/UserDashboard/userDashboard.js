import React, { Component } from 'react'
import { connect } from 'react-redux'; 
 class Dashboard extends Component {
  render() {

    console.log(this.props.products)
    return (
      <div style={{marginTop:'100px'}} >
        welcome
      </div>
    )
  }
}


const mapStateToProps=(state)=>({
  
  products:state.Products

})

export default connect(mapStateToProps)(Dashboard)