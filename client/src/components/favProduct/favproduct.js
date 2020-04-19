import React, { Component } from 'react'
import {GetFavourproducts} from '../../store/action/products/productaction'
import {connect} from 'react-redux'; 
class Favproduct extends Component {

componentDidMount(){
    this.props.GetFavourproducts()
}

    render() {
        console.log(this.props.Favourts)
        return (
            <div style={{marginTop:"8vh"}} > 
                <h1>THIS  IS FAVOURIT PRODUCT</h1>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  
   Favourts: state.favproduct

  
  })

  export default connect(mapStateToProps,{GetFavourproducts})(Favproduct)