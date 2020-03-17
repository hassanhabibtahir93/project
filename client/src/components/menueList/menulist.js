import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './menulist.css';

import imgShowCase from './images/men-906703245888-654537555048.png'
import Shirt from './images/menShirt.jpg'
import Pents from './images/menPents.jpg'
import Suits from './images/suits.jpg'
import Women from './images/women.png'
import Child from './images/child.png'
import { Link } from '@material-ui/core';
export default class MenuList extends Component {
  render() {


    const useStyles = makeStyles(theme => ({

      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));
    return (
      <div>


        <Grid item xs={12}>


          <div>
            <div className="items-body-men">
              <span className="men_list" ><Link>MENs</Link></span>
              <span><img className="cate_img" src={imgShowCase} /></span>
            </div>

          </div>


        </Grid>

        <div style={{flex:"wrap" }}  className="card" >
          <div className="itesm-list">



            <div className="items-body-lists">
              <span className="men_list" ><Link>Shirt</Link></span>
              <span><img className="cate_img_list" src={Shirt} /></span>
            </div>

          </div>
          <div style={{ flex: 1 }}></div>
      
            <div className="itesm-list">



              <div className="items-body-lists">
                <span className="men_list"   ><Link>Pents</Link></span>
                <span><img className="cate_img_list" src={Pents} /></span>
              </div>

            </div>
          <div className="fist-list"></div>
         


          <div className="itesm-list">



<div className="items-body-lists">
  <span className="men_list" ><Link>Suits</Link></span>
  <span><img className="cate_img_list" src={Suits} /></span>
</div>

</div>
<div style={{ flex: 1 }}></div>

<div className="itesm-list">



  <div className="items-body-lists">
    <span className="men_list"   ><Link>Pents</Link></span>
    <span><img className="cate_img_list" src={Pents} /></span>
  </div>

</div>




        </div>



        <Grid item xs={12}>


<div>

  <div className="items-body-women">
    <span className="men_list" ><Link>Women</Link></span>
    <span><img className="cate_img"  style={{marginTop:"12px"}}  src={Women} /></span>
  </div>

</div>


</Grid>




<div style={{flex:"wrap" }}  className="card" >
          <div className="itesm-list">



            <div className="items-body-lists">
              <span className="men_list" ><Link>Shirt</Link></span>
              <span><img className="cate_img_list" src={Shirt} /></span>
            </div>

          </div>
          <div style={{ flex: 1 }}></div>
      
            <div className="itesm-list">



              <div className="items-body-lists">
                <span className="men_list"   ><Link>Pents</Link></span>
                <span><img className="cate_img_list" src={Pents} /></span>
              </div>

            </div>
          <div className="fist-list"></div>
         


          <div className="itesm-list">



<div className="items-body-lists">
  <span className="men_list" ><Link>Suits</Link></span>
  <span><img className="cate_img_list" src={Suits} /></span>
</div>

</div>
<div style={{ flex: 1 }}></div>

<div className="itesm-list">



  <div className="items-body-lists">
    <span className="men_list"   ><Link>Pents</Link></span>
    <span><img className="cate_img_list" src={Pents} /></span>
  </div>

</div>




        </div>



        <Grid item xs={12}>


<div>

  <div className="items-body-child">
    <span className="men_list" ><Link>Women</Link></span>
    <span><img className="cate_img"  style={{marginTop:"12px"}}  src={Child} /></span>
  </div>

</div>


</Grid>




<div style={{flex:"wrap" }}  className="card" >
          <div className="itesm-list">



            <div className="items-body-lists">
              <span className="men_list" ><Link>Shirt</Link></span>
              <span><img className="cate_img_list" src={Shirt} /></span>
            </div>

          </div>
          <div style={{ flex: 1 }}></div>
      
            <div className="itesm-list">



              <div className="items-body-lists">
                <span className="men_list"   ><Link>Pents</Link></span>
                <span><img className="cate_img_list" src={Pents} /></span>
              </div>

            </div>
          <div className="fist-list"></div>
         


          <div className="itesm-list">



<div className="items-body-lists">
  <span className="men_list" ><Link>Suits</Link></span>
  <span><img className="cate_img_list" src={Suits} /></span>
</div>

</div>
<div style={{ flex: 1 }}></div>

<div className="itesm-list">



  <div className="items-body-lists">
    <span className="men_list"   ><Link>Pents</Link></span>
    <span><img className="cate_img_list" src={Pents} /></span>
  </div>

</div>




        </div>







      </div>
    )
  }
}
