import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


// box for parallax 
class Box extends React.Component {
    // renders the list based on list elements
    constructor(props) {
        super(props);
        this.state = {
            blur: ' back-blur',
        };

    }

    // functions to blur background on hover
    blurBg = () => {
        // note the space before back-blur
        this.setState({ blur: " back-blur" });
    }

    unblurBg = () => {
        this.setState({ blur: '' });
    }


    renderBtns() {
        var tBtnArr = [];
        // loop through all buttons for this section
        for (var i = 0; i < this.props.tBtn.length; ++i) {
            // photos button for special effects
            if (this.props.tBtn[i][0] === "Photos" || this.props.tBtn[i][0] === "Image") {
                // if no link, don't make it clickable
                if (this.props.tBtn[i][1] === "#") {
                    tBtnArr.push(
                        <div className="terminalBtn" onMouseEnter={this.unblurBg} onMouseLeave={this.blurBg}>{this.props.tBtn[i][0]}</div>
                    );
                }
                // makes it clickable
                else {
                    tBtnArr.push(
                        <a href={this.props.tBtn[i][1]} target="_blank">
                            <div className="terminalBtn" onMouseEnter={this.unblurBg} onMouseLeave={this.blurBg}>{this.props.tBtn[i][0]}</div>
                        </a >
                    );
                }
            }
            else if (this.props.tBtn[i][1] === "#") {
                tBtnArr.push(<div className="terminalBtn" >{this.props.tBtn[i][0]}</div>);
            }
            // other buttons
            else {
                tBtnArr.push(
                    <a href={this.props.tBtn[i][1]} target="_blank">
                        <div className="terminalBtn" >{this.props.tBtn[i][0]}</div>
                    </a>
                );
            }
        }
        return (
            <div className="btnContainer">
                {tBtnArr}
            </div>
        );

    }
    render() {
        var ret = [];
        for (var i = 0; i < this.props.description.length; ++i) {
            ret.push(<li>{this.props.description[i]}</li>);
        }

        return (
            <div className="parallax-container">
                <Element name={this.props.title} className="element" ></Element>
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
                                <h1>{this.props.title}</h1>
                                <ul>{ret}</ul>
                            </div>

                            {this.renderBtns()}

                        </div>
                    </div>
                </div>
                <div className={this.props.cName + this.state.blur}>
                </div>

            </div>
        );
    }
}


export default Box;