import React, { Component } from 'react'
import Slidersimple from '../slider/slider';
import Product from '../products/product';
import MenuList from '../menueList/menulist';
import CatgSlider from './categorslider/catgSlider'
import Favouritcategory from './Favouritcategory/Favouritcategory'
import Aux from '../../hoc/hoc'
export default class Home extends Component {
  render() {
    return (

      <Aux>
        <div>
          {/* <MainpPage/> */}
          <Slidersimple />
          {/* <Favouritcategory/> */}
          <CatgSlider />
          <br/>
          <br/>
          <br/>
          {/* <MenuList/> */}
          {/* <Product/> */}
        </div>
      </Aux>
    )
  }
}
