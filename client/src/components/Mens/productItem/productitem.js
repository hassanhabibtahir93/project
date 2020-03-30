import React, { Component } from 'react'
import { connect } from 'react-redux'

class Productitem extends Component {



    render() {

        console.log(this.props.match.params.id)

return (
<div>
                <br/>
                <br/>
                <h1>I am the product item</h1>
            </div>
        )
    }
}


const mapStateToProps=(state)=>({
  
   
  
  })

export default connect(mapStateToProps)(Productitem)