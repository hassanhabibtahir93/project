import React, { Component } from 'react'
import path from 'path';
import {getuserallproducts} from '../../store/action/products/productaction'
import { connect } from 'react-redux'; 
import './userDashbo.css'
import axios from 'axios'; 

class Dashboard extends Component {


  


componentDidMount (){
  this.props.getuserallproducts({user:this.props.auth.user})
 

} 


  render() {

console.log(this.props.Products)

  
   



       




      let   profileItems = this.props.Products.map((item, i) => {
              return (
               <div className="main">

<div className="card_products">

<div className="top-section">
 <div className="price">${item.price}</div>
  
   <center> <img  className="img_container" src={"http://localhost:8080/"+item.imgSrc[0]} alt="img1" /></center>


<div className="nav">

<img src={"http://localhost:8080/"+item.imgSrc[1]}/>
<img src={"http://localhost:8080/"+item.imgSrc[2]}/>
<img src={"http://localhost:8080/"+item.imgSrc[3]}/>

</div>

<div className="product_info">

<div  className="name_product"><h3>{item.productname}</h3></div>
<div className="dis">Description:{item.discription}</div>
</div>
</div>


</div>

               </div>
              )

        })
      
    return (
      <div className="mainvalue"  style={{marginTop:'100px'}} >
        {/* welcome */}
        {profileItems}
      </div>
    )
  }
}

 
const mapStateToProps=(state)=>({
  
  Products:state.getuserproducts.UserProducts
 
  ,
  auth:state.auth,
  


})

export default connect(mapStateToProps,{getuserallproducts})(Dashboard)