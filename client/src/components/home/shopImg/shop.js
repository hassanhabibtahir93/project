import React, { Component } from 'react'
import imgShow from './shpimg/shop.jpg'
export default class shop extends Component {
    render() {
        return (
            <div>
              
                <img  style={{width:"100%" ,height:"100vh"}} src={imgShow}/>
            </div>
        )
    }
}
