import React from 'react';
import ReactDOM from 'react-dom';
import './css/parallax.css';
import './css/terminal.css';
import './css/tlNav.css';
import './css/tlDivider.css'

// font awesome
import 'font-awesome/css/font-awesome.min.css';

// aos library for on scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

import { contentDescription, titles, fyContent, fyTitles } from './content/contentDescription';
import { terminalButton, fyTerminalButton } from './content/terminalBtns';

// timeline box component
import Box from './parallaxTimeline';
// timeline nav bar
import TlNav from './timelineNav';
// timeline section divider
import Divider from './tlDivider';

import { tlIntroContent, secondYear, firstYear } from './content/tlDividerContent';


class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tlNav: " tlNavClosed"
        };

        this.tlNavClick = this.tlNavClick.bind(this);
    }

    tlNavClick() {
        (this.state.tlNav === " tlNavClosed") ? this.setState({ tlNav: " tlNavOpen" }) : this.setState({ tlNav: " tlNavClosed" })
    }

    render() {
        const titleArr = titles;


        // array of Box components
        var contents = [];


        for (var i = 0; i < titles.length; ++i) {
            contents.push(<Box cName={'box box' + i}
                // imported from content
                title={titles[i]}
                // imported from text.js
                description={contentDescription[i]}
                // imported from terminalBtns.js
                tBtn={terminalButton[i]}
            />);
        }

        // array of Box components for first year 
        var fyContentArr = [];
        for (var i = 0; i < fyTitles.length; ++i) {
            fyContentArr.push(<Box cName={'box box' + (i + titles.length)}
                // imported from content
                title={fyTitles[i]}
                // imported from text.js
                description={fyContent[i]}
                // imported from terminalBtns.js
                tBtn={fyTerminalButton[i]}
            />);
        }


        return (
            <div timeLinePageContainer>
                <div className={'TLNavContainer' + (this.state.tlNav === " tlNavOpen" ? "Open" : "Closed")}>
                    <TlNav navClickHandler={this.tlNavClick}
                        tlNav={this.state.tlNav}
                    />
                </div>

                <div className={(this.state.tlNav === " tlNavOpen" ? " with-side-nav" : " no-side-nav")}>
                    <Divider dividerTitle={`Yuxuan's Timeline of Extracurriculars and Achievements`}
                        dividerContent={tlIntroContent}
                        dividerCname={"tlIntroPage"}
                        dividerBgName={"introTLbg"} />
                    <Divider dividerTitle={`Second Year (Current)`}
                        dividerContent={secondYear}
                        dividerCname={"secondYear"}
                        dividerBgName="secondYearbg" />
                    {contents}
                    <Divider dividerTitle={`First Year`}
                        dividerContent={firstYear}
                        dividerCname={"firstYear"}
                        dividerBgName={"firstYearbg"} />
                    {fyContentArr}
                </div>
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
