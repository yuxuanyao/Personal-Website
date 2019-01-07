import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



class Divider extends React.Component {

    render() {
        var dividerContentArr = [];
        for (var i = 0; i < this.props.dividerContent.length; ++i) {
            if (i > 1) {
                dividerContentArr.push(
                    <li>{this.props.dividerContent[i]}</li>
                );
            }
            else {
                dividerContentArr.push(
                    <p>{this.props.dividerContent[i]}</p>
                );
            }
        }
        return (
            <div className="parallax-container">
                <Element name={this.props.title} className="element" ></Element>
                <div className="text tlDivider" >
                    <div className="scroll-container" data-aos='zoom-in-right'>
                        <div className={this.props.dividerCname}>
                            <div className="font">
                                <h1>{this.props.dividerTitle}</h1>
                                <ul>{dividerContentArr}</ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"box " + this.props.dividerBgName}></div>
            </div>
        )
    }

}


export default Divider;