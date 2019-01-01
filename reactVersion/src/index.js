import React from 'react';
import ReactDOM from 'react-dom';
import './css/parallax.css';
import './css/terminal.css'

// aos library for on scroll animation
import AOS from 'aos';
import 'aos/dist/aos.css';






// box for parallax 
function Box(props) {


    // renders the list based on list elements
    var ret = [];
    for (var i = 0; i < props.description.length; ++i) {
        ret.push(<li>{props.description[i]}</li>);
    }


    return (
        <div className="parallax-container">
            <div className="text" >
                <div className="scroll-container" data-aos='zoom-in-right'>
                    <div className="bar">
                        <div className="red">
                        </div>
                        <div className="yellow">
                        </div>
                        <div className="green">
                        </div>
                    </div>
                    <div className="screen">
                        <div className="font">
                            <h1>{props.title}</h1>
                            <ul>{ret}</ul>
                        </div>
                    </div>
                </div>
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



        const tH1 = `I'm very honored to have been accepted into TreeHacks at Stanford University!`;
        const tH2 = `I'm looking forward to learn and imbibe lots of tech related knowledge!`;
        const tH3 = `(and visiting Silicon Valley!) `;


        const cro1 = `"The income from a capital fund established from the estate of the late Beatrice Crocker Glazier in memory of her brother, James William Crocker"`;
        const cro2 = `"Provides bursaries for students in the Faculty of Medicine and the Faculty of Applied Science and Engineering who are in need and are worthy of financial assistance."`;


        const hP1 = `November 11th, 2018 `;
        const hP2 = `Ceated a program named Avacancy`;
        const hP3 = `The program detects vacant parking spots within a parking lot using camera footage and python's openCV`;

        // arrays of strings
        const treeHacks = [tH1, tH2, tH3];
        const crocker = [cro1, cro2];
        const hackPrinceton = [hP1, hP2, hP3];

        // 2D array of strings
        var description = [treeHacks, crocker, hackPrinceton];

        // array of Box components
        var contents = [];

        for (var i = 0; i < titles.length; ++i) {
            contents.push(<Box cName={'box box' + i}
                title={titles[i]}
                description={description[i]} />);
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
