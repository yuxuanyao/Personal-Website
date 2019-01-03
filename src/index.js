import React from 'react';
import ReactDOM from 'react-dom';
import './css/parallax.css';
import './css/terminal.css'

// aos library for on scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { contentDescription } from './content/contentDescription'
import { terminalButton } from './content/terminalBtns'



// box for parallax 
class Box extends React.Component {
    // renders the list based on list elements
    constructor(props) {
        super(props);
        this.state = {
            blur: ' back-blur'

        };
    }

    // functions to blur background on hover
    blurBg = () => {
        this.setState({ blur: " back-blur" });
    }

    unblurBg = () => {
        this.setState({ blur: '' });
    }
    renderBtns() {
        var tBtnArr = [];
        for (var i = 0; i < this.props.tBtn.length; ++i) {
            if (this.props.tBtn[i][0] == "Photos") {
                if (this.props.tBtn[i][1] != "#") {
                    tBtnArr.push(
                        <div className="terminalBtn" onMouseEnter={this.unblurBg} onMouseLeave={this.blurBg}>{this.props.tBtn[i][0]}</div>
                    );
                }
                else {
                    tBtnArr.push(
                        <a href={this.props.tBtn[i][1]} target="_blank">
                            <div className="terminalBtn" onMouseEnter={this.unblurBg} onMouseLeave={this.blurBg}>{this.props.tBtn[i][0]}</div>
                        </a >
                    );
                }
            }
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
                <div className="text" >
                    <div className="scroll-container" data-aos='zoom-in-right'>
                        <div className="bar">
                            <div className="red">
                            </div>
                            <div className="yellow">
                            </div>
                            <div className="green">
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
        )
    }
}



class Timeline extends React.Component {

    render() {

        const titles = ["TreeHacks",
            "Crocker Foundation Bursary",
            "HackPrinceton"];

        // array of Box components
        var contents = [];

        for (var i = 0; i < titles.length; ++i) {
            contents.push(<Box cName={'box box' + i}
                title={titles[i]}
                // imported from text.js
                description={contentDescription[i]}
                // imported from terminalBtns.js
                tBtn={terminalButton[i]}
            />);
        }
        return (
            <div>
                {contents}
            </div>
        );
    }
}

// Top level component
class TopLevel extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 600,
        })

    }
    render() {
        return (
            <Timeline />
        );
    }
}

// ========================================

ReactDOM.render(
    <TopLevel />,
    document.getElementById('root')
);
