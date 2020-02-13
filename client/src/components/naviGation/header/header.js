import React, { Component } from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './header.css';
import DrawerToggle from '../sideBar/drawerToggleButon'
import { Link } from "react-router-dom";
import Serch from '../../serchNave/search/searchbar';
import Cart from '../../serchNave/cart/cart'
// import SimpleMenu from '../../auth/toolbar'
import ToolBar from '../../auth/toobar/tolbar'
import Aux from '../../../hoc/hoc'
class Header extends Component {
    render() {
        return (
            <Aux>
<header className="toolbar" >
<nav className="toolbar_navigation" >
    <div  className="tollbar-togle-button" ><DrawerToggle click={this.props.drawerClickHandler} /></div>
<div  className="toolbar_logo" ><a href="/">GOBACHI</a></div>

<div className="spacer"></div>

<div className="toolbar_navigation_items" >
<ul  className="toolbarsecond" >

<li className="header_nav" ><a href="#"   >MENs</a>
<ul className="list_show" >
<li  ><a href="#">Shirt</a></li>
<li><a href="#">Pents</a></li>
<li><a href="#">Jeans</a></li>
</ul>
</li>
<li><a href="#">Kids  </a>
<ul className="list_show" >
<li><a href="#">Shirt</a></li>
<li><a href="#">curta</a></li>
<li><a href="#">logng shirt</a></li>
</ul>
</li>
<li><a href="#">Women <i class="fas fa-care?t-down"></i> </a>
<ul className="list_show" >
<li><a href="#">Shirt</a></li>
<li><a href="#">logn shirt</a></li>
<li><a href="#"> typse <i className="arow_rotate"   style={{transform: "rotate(-90deg)"}} ><span   >&#11162;</span></i> </a>
<ul className="list_show_more" >
<li><a href="#"></a></li>
<li><a href="#">small shirt</a></li>
<li><a href="#">big shirt</a></li>
</ul>
</li>

</ul>

</li>


</ul>

</div>

<Serch/>
{/* <SimpleMenu/> */}

<div><Cart/></div>
<div><ToolBar/></div>
</nav>

</header>
</Aux>

        )}
}
export default Header;

