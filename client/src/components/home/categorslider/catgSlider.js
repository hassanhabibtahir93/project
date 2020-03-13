import React from 'react';
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import InfiniteCarousel from 'react-leaf-carousel';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import zIndex from '@material-ui/core/styles/zIndex';
import QuickOrder from '../categorslider/quickbox/quickbox';
import { Button } from '@material-ui/core';
import './quickbox/qhick.css'
const Box = posed.div({
    hidden: { opacity: 0, delay: 3000 },
    visible: { opacity: 1, delayChildren: 3000 },
});
const imageStyle = {
    width: "80%", height: "50vh",
    marginLeft: '1px'
}
const styles = {
    card: {
        maxWidth: 100,
    },
    media: {
        height: 200
    },
};
export default class CatgSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    img1: "https://d30fs77zq6vq2v.cloudfront.net/category/Round Men t Shirt-959358642920.png",
                    link:'/'
                },
                {
                    img1: 'https://d30fs77zq6vq2v.cloudfront.net/category/Round men kurta-344094639405.png',
                  
                },
                {
                    img1: ' https://d30fs77zq6vq2v.cloudfront.net/category/Round Topsa-703286853906.png',
                  
                },
                {
                    img1: 'https://d30fs77zq6vq2v.cloudfront.net/category/Round Jeans-936614289225.png',
                   
                },
                {
                    img1: 'https://d30fs77zq6vq2v.cloudfront.net/category/round dresses-1524719222883.png',
                   
                },
                {
                    img1: 'https://d30fs77zq6vq2v.cloudfront.net/category/boys-1505874350709.png',
                  
                }


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
                        breakpoint: 200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        },
                    },
                    {
                        breakpoint: 768,
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
                slidesToShow={4}
                scrollOnDevice={true}
            >
                {this.state.items.map((item) => {
                    return <div className="cards"><div
                        className={styles.card + " cardManager"}
                    // onMouseEnter={() => {

                    //     this.setState({
                    //         isHowering: true
                    //     });
                    // }}
                    // onMouseLeave={() => {
                    //     this.setState({
                    //         isHowering: false
                    //     });
                    // }}
                    >

                        {/* <CardActionArea onClick={this.Click} > */}
                            <img style={imageStyle} className="image-list" src={item.img1} />
                           
                        {/* </CardActionArea> */}
                        <br/>
                        <div className="effects">
                            <span ><QuickOrder/></span>
                        
                        </div>
                    </div></div>
                })}
            </InfiniteCarousel>
        );
    }
}