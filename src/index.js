import React from 'react';
import ReactDOM from 'react-dom';
import './css/parallax.css';
import './css/terminal.css';
import './css/tlNav.css';

// font awesome
import 'font-awesome/css/font-awesome.min.css';

// aos library for on scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { contentDescription, titles } from './content/contentDescription';
import { terminalButton } from './content/terminalBtns';

// timeline box component
import Box from './parallaxTimeline';
// timeline nav bar
import TlNav from './timelineNav';






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
        return (
            <div timeLinePageContainer>
                <div className={'TLNavContainer' + (this.state.tlNav === " tlNavOpen" ? "Open" : "Closed")}>
                    <TlNav navClickHandler={this.tlNavClick}
                        tlNav={this.state.tlNav}
                    />
                </div>

                <div className={(this.state.tlNav === " tlNavOpen" ? " with-side-nav" : " no-side-nav")}>
                    {contents}
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
