import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




// box for parallax 
function Box(props) {
    return (
        <div className="parallax-container">
            <div className="text">
                <h1>{props.title}</h1>
            </div>
            <div className={props.cName}>
            </div>

        </div>
    )

}


class Timeline extends React.Component {

    // render parallax box components
    renderBox(name, title) {
        return (
            <Box
                cName={name}
                title={title}
            //content={content}
            />
        );
    }



    render() {

        var titles = ["TreeHacks",
            "Crocker Foundation Bursary",
            "HackPrinceton"]
        var contents = [];

        for (var i = 0; i < titles.length; ++i) {
            contents.push(<Box cName={'box box' + i} title={titles[i]} />);
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
