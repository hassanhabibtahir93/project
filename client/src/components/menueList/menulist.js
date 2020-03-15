import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './menulist.css';
import img1 from  './images/men-906703245888-654537555048.png'
import { Link } from '@material-ui/core';
export default class MenuList extends Component {
  render() {


    const useStyles = makeStyles(theme=>({
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
        <Grid container  >

        <Grid    item xs={12}>
          <div>
        <div className="items-body">
      <div className="items-body-content">
    <span className="men_list" ><Link>MEN</Link></span>
      <span><img   className="cate_img" src={img1}/></span>
     </div>
  </div>
  </div> 
{/* {/* </div> */}
        </Grid>
        </Grid>
      </div>
    )
  }
}
