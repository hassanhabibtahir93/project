import React from 'react';
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import InfiniteCarousel from 'react-leaf-carousel';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import zIndex from '@material-ui/core/styles/zIndex';
// import '../css/cat_cards.css';
// import QuickOrder from '../cat-cards/quick-order';
import { Button } from '@material-ui/core';
const Box = posed.div({
    hidden: { opacity: 0, delay: 3000 },
    visible: { opacity: 1, delayChildren: 3000 },
});
const imageStyle = {
    width: "30%", height: "30vh",
    // marginLeft: '1px'
}
const styles = {
    card: {
        maxWidth: 200,
    },
    media: {
        height: 140,
    },
};
export default class CatgSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    img1: "https://epicwoo.com/demo/wp-content/uploads/2018/05/product-60.jpg",
                    price:"200"
                },
                {
                    img1: 'https://epicwoo.com/demo/wp-content/uploads/2018/05/product-32-1.jpg',
                    price:"1000"
                },
                {
                    img1: ' https://epicwoo.com/demo/wp-content/uploads/2018/05/product-80.jpg',
                    price:"900"
                },
                {
                    img1: 'https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg',
                    price:"700"
                },
                {
                    img1: 'https://epicwoo.com/demo/wp-content/uploads/2018/05/product-34-1-350x340.jpg',
                    price:"300"
                }


            ],

            // isHowering: false
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
                        breakpoint: 500,
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
                dots={false}
                showSides={true}
                sidesOpacity={.5}
                sideSize={.1}
                slidesToScroll={1}
                slidesToShow={4}
                scrollOnDevice={true}
            >
                {this.state.items.map((item) => {
                    return <div className="cards"><Card
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

                        <CardActionArea onClick={this.Click} >
                            <img style={imageStyle} className="image-list" src={item.img1} />
                            <span className="price_tag">Price:${item.price}</span>
                        </CardActionArea><br/>
                        <a href="#" className="buyNowbtn">Buy Now</a>
                        <div className="effects">
                            {/* <span><QuickOrder/></span> */}
                            <span className="add"> Add to Wishlist</span>
                        </div>
                    </Card></div>
                })}
            </InfiniteCarousel>
        );
    }
}