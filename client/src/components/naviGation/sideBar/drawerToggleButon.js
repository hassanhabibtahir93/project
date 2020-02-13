import React from 'react'
import './drawertooglebutton.css';
const DrawerToggle = (props)=>(

    <div className="toogle_button" onClick={props.click}  >

   <div className="toggle-button-line" />
   <div className="toggle-button-line" />
   <div className="toggle-button-line" />
 </div>


);

export default DrawerToggle;