import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';



class Divider extends React.Component {
    render() {
        return (
            <div className="parallax-container">
                <Element name={this.props.title} className="element" ></Element>
                <div className="text tlDivider" >
                    <div className="scroll-container" data-aos='zoom-in-right'>
                        <div className={"tlDividerScreen"}>
                            <div className="font">
                                <h1>{this.props.dividerTitle}</h1>
                                <ul>{this.props.dividerContent}</ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box introTLbg"></div>
            </div>
        )
    }

}


export default Divider;