import React, { Component } from 'react'
import Slidersimple from '../slider/slider';
import MenuList from '../menueList/menulist';
import CatgSlider from '../home/categorslider/quickbox/catgSlider'
import Showcase from './shopImg/shop'
import Details from './Details/details'
 import Paralex from './paralelx/foot';
 import Header from './paralelx/footer/header';
 import Scrool from './scrolUpBtn/ScrolUp'
import Aux from '../../hoc/hoc'
export default class Home extends Component {
  render() {
    return (

      <Aux>

      <div>

      <div style={{ height: "auto" ,marginTop:"60px"}} >
          <Slidersimple />
        </div>

        <div style={{ height: "auto" ,marginTop:"60px"}}>

          <Details />
        </div>
<br/>
        <div style={{ height: "auto" }} >
          <CatgSlider />
        </div>

<br/>
        <div   ><MenuList/></div>

<br/>
        <div> <Showcase /></div>
        <div> <Paralex/></div>
        <div><Header/></div>   
        <div><Scrool/></div>
      </div>
           </Aux>
    )
  }
}
