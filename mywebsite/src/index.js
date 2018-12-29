import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TopLevel extends React.Component {
    render() {
        return (
            <div>
                <div id="box1">
                    <h1>Parallax</h1>
                </div>
                <div id="box2">
                    <h1>Parallax</h1>
                </div>
                <div id="box3">
                    <h1>Parallax</h1>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <TopLevel />,
    document.getElementById('root')
);
