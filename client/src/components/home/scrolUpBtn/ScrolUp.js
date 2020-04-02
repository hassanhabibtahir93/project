import React from "react";
import ScrollToTop from "react-scroll-up";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import "./scrollUp.css";
class ScrollUp extends React.Component {
    render() {
        return (<div >
            <ScrollToTop showUnder={160}>
                <div className="scrolup" >
                <i  style={{color:"white",fontSize:"24px"}} class="fas fa-angle-up"><ArrowUpwardIcon fontSize="large" /></i>
                </div>
            </ScrollToTop>
        </div>)
    }
}
export default ScrollUp;

