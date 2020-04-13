import React from 'react';
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import InfiniteCarousel from 'react-leaf-carousel';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import zIndex from '@material-ui/core/styles/zIndex';
// import QuickOrder from '../categorslider/quickbox/quickbox';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './qhick.css'
const Box = posed.div({
    hidden: { opacity: 0, delay: 3000 },
    visible: { opacity: 1, delayChildren: 3000 },
});
const imageStyle = {
    // width: "80%", height: "40vh",
    marginLeft: '1px'
}

export default class CatgSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    img1: "https://d30fs77zq6vq2v.cloudfront.net/category/Round Men t Shirt-959358642920.png",
                    link: '/manpens'
                },
                {
                    img1: 'https://d30fs77zq6vq2v.cloudfront.net/category/Round men kurta-344094639405.png',
                    link: '/manjens'
                },
                {
                    img1:'https://d30fs77zq6vq2v.cloudfront.net/product/880x1000/20052019/b19b74d8a904d2aa8e78f71a2bd05f75-185186319607.JPEG',
                    link: '/manshirt'
                },
                {
                    img1: ' https://d30fs77zq6vq2v.cloudfront.net/category/Round Topsa-703286853906.png',
                    link: '/womshirt'
                },
                {
                    img1: 'https://d30fs77zq6vq2v.cloudfront.net/category/Round Jeans-936614289225.png',
                    link: '/womenjens'
                },
                {
                    img1: 'https://d30fs77zq6vq2v.cloudfront.net/category/round dresses-1524719222883.png',
                    link: '/womenpent'
                },
                { img1: "https://d30fs77zq6vq2v.cloudfront.net/product/880x1000/15052019/21ed6f7dcacd6cefd25963980a110098-450437341402.JPEG" 
               , link: '/kidsshirt'
            }
                ,
                {
                    img1: 'https://d30fs77zq6vq2v.cloudfront.net/category/boys-1505874350709.png',
                    link: 'kidspents'
                },
                { img1: "https://d30fs77zq6vq2v.cloudfront.net/product/880x1000/22072019/9fbfc47578157c247e895081b6c78b17-477342285184.JPEG" 
                ,link: 'kidsjeens'}

            ],


        }
    }
    Click() {
        console.log("jaha");
    }
    render() {
        return (
            <InfiniteCarousel
                breakpoints={[
                    {
                        breakpoint: 10,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 8,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        },
                    },
                ]}
                autoplay={true}
                dots={false}
                showSides={true}
                sidesOpacity={.1}
                sideSize={.1}
                slidesToScroll={1}
                slidesToShow={5}
                scrollOnDevice={true}
            >
                {this.state.items.map((item) => {
                    return <div className="cards_slider">


                        <div>

                           
                         <img style={imageStyle} className="image_list"   width="600" height="400"  src={item.img1} />
                           
            

                            <br />
                            {/* <span className="effects">
                                <span>
                                Category 
                      <Link to={'/'+item.link}>{item.link}</Link>
                            </span>

                            </span> */}
                        </div></div>
                })}
            </InfiniteCarousel>
        );
    }
}