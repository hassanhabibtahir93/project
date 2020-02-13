import React, { Component } from 'react'
import {connect} from 'react-redux';
 class Product extends Component {
  
  
  
  
    render() {
    return (
      <div>
    
<h1>Product</h1>
{console.log(this.props.product.product)}
      </div>
    )
  }
}


const mapStatetopros=(state)=>({


product:state.Mens

})

export default connect(mapStatetopros)(Product);