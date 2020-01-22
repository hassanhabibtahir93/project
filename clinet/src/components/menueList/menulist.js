import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './menulist.css';
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
        <Grid container spacing={3} >

        <Grid   className="conter_list" item xs={2}>
          <div>
        <div className="items-body">
      <div className="items-body-content">
        <span>MEN</span>
        <i className="fa fa-angle-right"></i>
      </div>
      <div className="items-body-content">
        <span>WOMEN</span>
        <i className="fa fa-angle-right"></i>
      </div>
      <div className="items-body-content">
        <span>CHILD</span>
        <i className="fa fa-angle-right"></i>
      </div>
      
    </div>
  </div>
{/* </div> */}
        </Grid>
        </Grid>
      </div>
    )
  }
}
