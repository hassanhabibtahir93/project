import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { connect } from 'react-redux'
import './productitem.css'
import { getProfilebyId } from '../../../store/action/products/productaction'
class Productitem extends Component {


    componentDidMount() {
        if (this.props.match.params.id) {

            this.props.getProfilebyId(this.props.match.params.id)
        }
    }

    changedData = (img) => {
        const containerSrc = this.refs.imageContainer.src
  console.log("this is second",containerSrc)
  this.refs.imageContainer.src="http://localhost:8080/"+img
  console.log(img) 
    }


    render() {

        // console.log(this.props.match.params.id)

        const Images = this.props.SingleProduct===undefined||this.props.SingleProduct===null? <h1>show is noting</h1>:this.props.SingleProduct.ItemProduct.map((item) => {
            console.log(item)
            return (
                <div className="product-item">
                    <br />
                    <br />
                    <div className="item-slider">



                        <div className="slide-item"   > <img onClick={() => { this.changedData(item.imgSrc[0]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[0]} /></div>
                        <div className="slide-item"   > <img onClick={() => { this.changedData(item.imgSrc[1]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[1]} /></div>
                        <div className="slide-item"   > <img onClick={() => { this.changedData(item.imgSrc[2]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[2]} /></div>
                        <div className="slide-item"   > <img onClick={() => { this.changedData(item.imgSrc[3]) }} ref='image' src={"http://localhost:8080/" + item.imgSrc[3]} /></div>
                    </div>
                    <div className="space-between"></div>
                    <div className="big-card" >
                        <Card className="item-card"  >

                            <img ref='imageContainer' className="img_container" src={"http://localhost:8080/" + item.imgSrc[3]} alt="img1" />
                        </Card>

                    </div>
                    <div className="categ-info" ></div>
                    <div></div>
                </div>
            )
        })


        return (
            <div className="container_product" >
                {Images}
            </div>
        )
    }
}


const mapStateToProps = (state) => ({

    SingleProduct: state.ItempProduct

})

export default connect(mapStateToProps, { getProfilebyId })(Productitem)