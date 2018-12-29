import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

const ParallaxImage = () => (
    <Parallax
        className="custom-class"
        offsetYMax={20}
        offsetYMin={-20}
        slowerScrollRate
        tag="figure"
    >
        <Image src="./images/image.jpg" />
    </Parallax>
);

class Image extends React.Component {
    static contextTypes = {
        parallaxController: PropTypes.object.isRequired,
    };

    handleLoad = () => {
        // updates cached values after image dimensions have loaded
        this.context.parallaxController.update();
    };

    render() {
        return <img src={this.props.src} onLoad={this.handleLoad} />;
    }
}

class TopLevel extends React.Component {
    render() {
        return (
            <ParallaxProvider>
                <Parallax
                    className="custom-class"
                    offsetYMax={20}
                    offsetYMin={-20}
                    slowerScrollRate
                    tag="figure"
                >
                    <Image src="/image.jpg" />
                </Parallax>
            </ParallaxProvider>
        );
    }
}

// ========================================

ReactDOM.render(
    <TopLevel />,
    document.getElementById('root')
);
