import React from 'react';
import { titles } from './content/contentDescription';

class TlNav extends React.Component {


    render() {
        var tlNavItems = [];

        for (let i = 0; i < titles.length; ++i) {
            tlNavItems.push(
                // need to add href
                <div className={"tlNavItems "}>{titles[i]}</div>
            );
        }

        return (
            <div className="tlNav">
                {/* Icon for Opening and Closing NavBar */}
                <div className={this.props.tlNav + "Container"}>
                    <div className={"tlNavIcon" + this.props.tlNav} onClick={this.props.navClickHandler}></div>
                </div>
                {/* to fix background transition */}
                <div className={this.props.tlNav + "BgFix"}></div>
                {/* NavBar Contents aka Titles  */}
                <div className={this.props.tlNav + "Content"}>
                    <div className={"tlNavListContainer " + ((this.props.tlNav === " tlNavOpen") ? " listDisplay" : " listNoDisplay")}>
                        {tlNavItems}
                    </div>
                </div>
            </div >

        );
    }
}

export default TlNav;