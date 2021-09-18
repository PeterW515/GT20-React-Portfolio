import React from "react";


function Banner() {

    return (
        <div class="section-100vh">
            <div class="overlay-content">
                <div class="parallax-container">
                    <div class="parallax" style="background-image: url(assets/code_sample.png)">
                    </div>
                    <div class="overlay-text" style="width: 75%; min-width: 350px;">
                        <h1 class="white-text">Peter Weigman's Portfolio</h1>
                        <a class="waves-effect waves-light btn" href="#myWork" id="enter">Enter</a>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Banner;