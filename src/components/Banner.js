import React from "react";
import code_sample from '../assets/code_sample.png';

function Banner() {

    return (
        <div className="section-100vh">
            <div className="overlay-content">
                <div className="parallax-container">
                    <div className="parallax" style={{ backgroundImage: `url(${code_sample})` }}>
                    </div>
                    <div className="overlay-text" style={{ width: "75%", minWidth: "350px" }}>
                        <h1 className="white-text">Peter Weigman's Portfolio</h1>
                        <a className="waves-effect waves-light btn" href="#myWork" id="enter">Enter</a>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Banner;