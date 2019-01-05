import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



class divider extends React.Component {
    render() {
        return (
            <div className="parallax-container" >
                <Element name="tlTop" className="element" ></Element>
                <div className="text" >
                    <div className="scroll-container" data-aos='zoom-in-right'>
                        <div className="bar">
                            <div className="tCircles red">
                            </div>
                            <div className="tCircles yellow">
                            </div>
                            <div className="tCircles green">
                            </div>
                        </div>
                        <div className={"screen"}>
                            <div className="font">
                                <h1>{this.props.tlDividerTitle}</h1>
                                <ul>{this.props.tlDividerContent}</ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box introTLbg">
                </div>

            </div>
        )
    }

}


export default divider;