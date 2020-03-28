import React, { Component } from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import './header.css';
import DrawerToggle from '../sideBar/drawerToggleButon'
import { Link } from "react-router-dom";
import Serch from '../../serchNave/search/searchbar';
import Cart from '../../serchNave/cart/cart';
// import SimpleMenu from '../../auth/toolbar'
import ToolBar from '../../auth/toobar/tolbar';
import Aux from '../../../hoc/hoc';
import { connect } from 'react-redux'; 
class Header extends Component {
    render() {
        console.log("Admain in home ",this.props.auth.user.Admin)
            const list=(
            <ul  className="toolbarsecond" >

<li className="header_nav" ><Link to="/mens">MENs</Link>
<ul className="list_show" >
<li  ><a href="#">Shirt</a></li>
<li><a href="#">Pents</a></li>
<li><a href="#">Jeans</a></li>
</ul>
</li>
<li><Link to="/product/child">CHILD</Link>
<ul className="list_show" >
<li><a href="#">Shirt</a></li>
<li><a href="#">curta</a></li>
<li><a href="#">logng shirt</a></li>
</ul>
</li>
<li><Link to="/product/women">WOMEN<i class="fas fa-care?t-down"></i> </Link>
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
        )


const adminLinks=(
    <div  > 
    <Link to="/admin" ><img src="https://img.icons8.com/ultraviolet/40/000000/data-configuration.png"/></Link>

    </div>

    )


        return (
            <Aux>
<header className="toolbar" >
<nav className="toolbar_navigation" >
{this.props.auth.user.Admin?null:<div  className="tollbar-togle-button" ><DrawerToggle click={this.props.drawerClickHandler} /></div>}
<div  className="toolbar_logo" ><a href="/">GOBACHI</a></div>

<div className="spacer"></div>

<div className="toolbar_navigation_items" >
{this.props.auth.user.Admin?adminLinks:list}

</div>

{this.props.auth.user.Admin?null:<Serch/>}


{this.props.auth.user.Admin?null:<div><Cart/></div>}

<div><ToolBar/></div>
</nav>

</header>
</Aux>

        )}
}

const mapStateToProps=(state)=>({
    errors:state.erorr,
    auth:state.auth
  })

export default connect(mapStateToProps)(Header)

