import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Box(props) {
    return (
        <div className={props.cName}>
            <h1>Parallax</h1>
        </div>
    )

}

class TopLevel extends React.Component {

    renderBox(name) {
        return (
            <Box
                cName={name}
            />
        );
    }

    render() {
        let i = 0;
        return (
            <div>
                {this.renderBox('box box' + (++i))}
                {this.renderBox('box box' + (++i))}
                {this.renderBox('box box' + (++i))}
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <TopLevel />,
    document.getElementById('root')
);
