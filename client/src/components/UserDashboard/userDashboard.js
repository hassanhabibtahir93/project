import React, { Component } from 'react'
import path from 'path';
import { connect } from 'react-redux'; 
import './userDashbo.css'
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
              return (
                <div className="card_products">

                <div className="top-section">
                  
                   <center> <img  className="img_container" src={"http://localhost:8080/"+item.imgSrc[0]} alt="img1" /></center>


<div className="nav">

<img src={"http://localhost:8080/"+item.imgSrc[1]}/>
<img src={"http://localhost:8080/"+item.imgSrc[2]}/>
<img src={"http://localhost:8080/"+item.imgSrc[3]}/>

</div>
<div className="price">${item.price}</div>

<div className="product_info">

              <div  className="name_product">{item.productname}</div>
<div className="dis">{item.discription}</div>
</div>
                </div>


            </div>
              )

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