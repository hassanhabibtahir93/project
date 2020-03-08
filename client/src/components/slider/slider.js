import React, { Component } from 'react'
import Slider from "react-slick";
import './slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
class Slidersimple extends Component {


  next = () => {
		this.slider.slickNext();
	}
	previous = () => {
		this.slider.slickPrev();
	}


    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
      };
      return (

        <div className='container'>

<div onClick={this.previous} className="left-arrow"><ArrowBackIosIcon className="leftIcon" /></div>
				<div onClick={this.next} className="right-arrow"><ArrowForwardIosIcon  className="rightIcon" /></div>

        <Slider   ref={c => (this.slider = c)} {...settings}      className="sliderContainer"   >
        
          <div>
            <div className="slide1" >
              <br/>
       <h1>hassan habib tahir</h1>
            </div>
          </div>
          <div>
          <div className="slide2" >
             
            </div>
          </div>
          <div>
          <div className="slide3" >
               
            </div>
          </div>
          <div>
          <div className="slide4" >
           
            </div>
          </div>
          <div>
          <div className="slide5" >
              
            </div>
          </div>
         
        </Slider>
        </div>
      );
    }
  }

  export default Slidersimple