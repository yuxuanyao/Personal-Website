import React from 'react';
import ReactDOM from 'react-dom';
import './css/parallax.css';
import './css/terminal.css'

// aos library for on scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';
import { contentDescription } from './content/contentDescription';
import { terminalButton } from './content/terminalBtns';

// timeline box component
import Box from './parallaxTimeline';


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
