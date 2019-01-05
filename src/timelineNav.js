import React from 'react';
import { titles } from './content/contentDescription';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class TlNav extends React.Component {


    render() {
        var tlNavItems = [];

        for (let i = 0; i < titles.length; ++i) {
            tlNavItems.push(
                // need to add href
                <li className={"tlNavItems "}>
                    <Link activeClass="active" to={titles[i]} spy={true} smooth={true} duration={500} >{titles[i]}</Link>
                </li>
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
                    {/* the actual line */}
                    <div className={"tLine" + ((this.props.tlNav === " tlNavOpen") ? "Open" : "Closed")}>
                        {/* the circles in the line */}
                        <div className={"tLineCircContainer"}>
                            {/* {tLineCircArr} */}
                        </div>
                    </div>
                    <ul className={"tlNavListContainer " + ((this.props.tlNav === " tlNavOpen") ? " listDisplay" : " listNoDisplay")}>
                        {tlNavItems}
                    </ul>

                </div>

            </div >

        );
    }
}

export default TlNav;