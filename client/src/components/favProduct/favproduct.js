import React, { Component } from 'react'
import {GetFavourproducts} from '../../store/action/products/productaction'
import {connect} from 'react-redux'; 
class Favproduct extends Component {

componentDidMount(){
    this.props.GetFavourproducts()
}

    render() {
        return (
            <div style={{marginTop:"8vh"}} > 
                <h1>THIS  IS FAVOURIT PRODUCT</h1>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  


  
  })

  export default connect(mapStateToProps,{GetFavourproducts})(Favproduct)