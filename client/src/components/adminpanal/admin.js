import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
// import { Link } from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShopIcon from '@material-ui/icons/Shop';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import history from '../history/history'
import Users from './users/usres' ;
import './admin.css';
import { findByLabelText } from '@testing-library/react';
const useStyles = makeStyles(theme => ({
  root: {
    width: '150%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Router history={history} >
    <div className="admin_page" >
        <div className="list"  >

        <List
        
      component="nav"
      aria-labelledby="nested-list-subheader"
    
      className={classes.root}
    >
        <h3 >admin Name</h3>
      <ListItem button>
     <div> <div className="admin_icon" ><GroupIcon fontSize='large'/></div></div>
    
     <Link to="/users" className="links" >users</Link>
        
        
     
      </ListItem>
      <ListItem button>
      <div className="admin_icon" >
      <ShoppingBasketIcon fontSize='large'  />
      </div>
     
      <Link to="/users" className="links" >Products</Link>
         
       </ListItem>
       <ListItem button>
      <div className="admin_icon" >
      <TagFacesIcon fontSize='large'  />
      </div>
     
      <Link to="/factorymen" className="links" >factorymen</Link>
         
       </ListItem>
       <ListItem button>
      <div className="admin_icon" >
      <ShopIcon fontSize='large'  />
      </div>
     
      <Link to="/factorymen" className="links" >wholesaler</Link>
         
       </ListItem>
       <ListItem button>
      <div className="admin_icon" >
      <AddShoppingCartIcon fontSize='large'  />
      </div>
     
      <Link to="/factorymen" className="links" >Cart</Link>
         
       </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
        </div>



    <div className="contens" >
       
        <Route exact path="/users" component={Users} />
    </div>
    </div>
    
    </Router>
  );
}