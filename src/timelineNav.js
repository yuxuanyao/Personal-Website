import React from 'react';
import { titles } from './content/contentDescription';

class TlNav extends React.Component {
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
        var tlNavItems = [];

        for (let i = 0; i < titles.length; ++i) {
            tlNavItems.push(
                // need to add href
                <li className="tlNavItems">{titles[i]}</li>
            );
        }

        return (
            <div className="tlNav">
                <div className={this.state.tlNav + "Container"}>
                    <div className={"tlNavIcon" + this.state.tlNav} onClick={this.tlNavClick}></div>
                </div>
                <div className={this.state.tlNav + "Content"}>
                    <ul >
                        {tlNavItems}
                    </ul>
                </div>
            </div>

        );
    }
}

export default TlNav;