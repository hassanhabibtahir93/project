import React, { Component } from 'react'
 import Slidersimple from '../slider/slider';
 import Product from '../products/product';
 import MenuList from '../menueList/menulist';
 import Aux from '../../hoc/hoc'
export default class Home extends Component {
  render() {
    return (

      <Aux>
      <div>
        <Slidersimple/>
        <MenuList/>
        {/* <Product/> */}
      </div>
      </Aux>
    )
  }
}
