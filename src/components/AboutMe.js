import React from "react";


function AboutMe() {

    return (
<div class="row container section section-100vh clearfix" id="about">
            <div class="row center-align">
                <h2><i class="small material-icons">person</i>About Me<i class="small material-icons">person</i></h2>
            </div>
            <div class="row">
                <ul class="collapsible">
                    <li class="active">
                        <div class="collapsible-header">
                            <h5><i class="material-icons">history</i>My Background</h5>
                        </div>
                        <div class="collapsible-body"><span>After graduating from Clemson University in 2018, I began
                                working for Manhattan
                                Associates, a supply chain software company. As a consultant and then business
                                analyst, I worked on the functional side of the software. Around the middle of 2020,
                                I began to think I wanted to move in to more technical work.</span></div>
                    </li>
                    <li class="active">
                        <div class="collapsible-header">
                            <h5><i class="material-icons">date_range</i>Current Experience</h5>
                        </div>
                        <div class="collapsible-body"><span>After making that decision, I enrolled in the Georgia
                                Tech Full Stack Coding Bootcamp in the beginning of 2021. This rigorous program teaches
                                the
                                fundamentals of HTML, CSS, and Javascript and then quickly accelerates into API
                                development,
                                Node.js, OOP basics, servers, Express, SQL, MVC, Progressive Web Apps, React, and many
                                other
                                frameworks, libraries, and packages.</span></div>
                    </li>
                    <li class="active">
                        <div class="collapsible-header">
                            <h5><i class="material-icons">forward</i>Future Goals</h5>
                        </div>
                        <div class="collapsible-body"><span>I've developed this portfolio with links to some of my
                                projects, as well as my Github
                                account. I hope to use this to showcase my work and launch my career as a full stack
                                developer!</span></div>
                    </li>
                </ul>
            </div>
        </div>
    );

};

export default AboutMe;