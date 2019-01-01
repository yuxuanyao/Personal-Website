import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';




// box for parallax 
function Box(props) {
    return (
        <div className="parallax-container">
            <div className="text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
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
            "HackPrinceton"];

        const treeHacks = `I'm very honored to have been accepted into TreeHacks at Stanford University! I'm looking forward to learning and imbibing lots of tech related knowledge and visiting Silicon Valley! `;
        const crocker = `"The income from a capital fund established from the estate of the late Beatrice Crocker Glazier in memory of her brother, James William Crocker, provides bursaries for students in the Faculty of Medicine and the Faculty of Applied Science and Engineering who are in need and are worthy of financial assistance."`;
        const hackPrinceton = `I attended HackPrinceton in November, 2018 with a friend and created a program to detect vacant parking spots within a parking lot using camera footage and python's openCV`
        var description = [treeHacks, crocker, hackPrinceton];

        var contents = [];

        for (var i = 0; i < titles.length; ++i) {
            contents.push(<Box cName={'box box' + i} title={titles[i]} description={description[i]} />);
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
