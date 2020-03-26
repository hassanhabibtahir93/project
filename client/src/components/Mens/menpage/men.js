import React, { Component } from 'react'
//  import {getuserallproducts} from '../../../store/action/products/productaction'
import { connect } from 'react-redux'; 

 class MEN extends Component {



    // componentDidMount (){
    //     this.props.getuserallproducts({user:this.props.auth.user})
       
      
    //   } 


    render() {

 const  MenProducts = this.props.Products

 let items= MenProducts.filter(( item,index)=>{
  
      return item.category ===  "gents"
  
})
console.log(items)
        return (
            <div style={{marginTop:"70px"}}>
            <h1>hi asslamoalikum</h1>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
  
    Products:state.getuserproducts.UserProducts
   

  
  })
//   {getuserallproducts}
  export default connect(mapStateToProps)(MEN)