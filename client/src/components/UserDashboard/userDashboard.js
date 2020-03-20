import React, { Component } from 'react'
import { connect } from 'react-redux'; 
 class Dashboard extends Component {
  render() {

    const {products} = this.props.Products
   
    let profileItems;
if (products === null) {
  profileItems = <h1>loading.............</h1>;
}
else {
    if (products === undefined) {
        profileItems = <h1>loading...........agin..</h1>;
    }
    else {


        console.log(products)




        profileItems = products.map((item, i) => {
console.log(item.imgSrc[0])
             return <img src={item.imgSrc[0]}/>
        })
      }
    return (
      <div style={{marginTop:'100px'}} >
        welcome
        {profileItems}
      </div>
    )
  }
}

 }
const mapStateToProps=(state)=>({
  
  Products:state.Products

})

export default connect(mapStateToProps)(Dashboard)