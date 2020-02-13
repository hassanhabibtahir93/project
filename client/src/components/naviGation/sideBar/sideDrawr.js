import React from 'react';
import './sideDrawr.css';
import { Link } from "react-router-dom";
const SideDrawr = (props)=>{
    let drawerClasses='side-drawer';
    if(props.show){
        drawerClasses='side-drawer open'
    }

    return(
        <nav className={drawerClasses} >
<ul>

     <li><Link to="/">Home</Link></li>
    <li><Link to="/Courses">Courses</Link></li>
</ul>

</nav>
    )
}
export default SideDrawr;
