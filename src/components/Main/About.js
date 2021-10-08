import React from "react";
import myAvatar from '../../assets/myAvatar.png';

function About() {


    return (
        <div className="row">
            <div className="col l3 m5 s12 center-align">
                <img id="avatarImg" src={myAvatar} width="250px" alt="my avatar" />
            </div>
            <div className="col l9 m7 s12 center-align">
                <ul className="collection with-header">
                    <li className="collection-header"><i className="fas fa-history">Background</i></li>
                    <li className="collection-item"><div>After graduating from Clemson University in 2018, I began working for Manhattan Associates, a supply chain software company. As a consultant and then business analyst, I worked on the functional side of the software. Around the middle of 2020, I began to think I wanted to move in to more technical work.</div></li>
                </ul>

                <ul className="collection with-header">
                    <li className="collection-header"><i className="fas fa-calendar-check">Experience</i></li>
                    <li className="collection-item"><div>After making that decision, I enrolled in the Georgia Tech Full Stack Coding Bootcamp in the beginning of 2021. This rigorous program teaches the fundamentals of HTML, CSS, and Javascript and then quickly accelerates into API development, Node.js, OOP basics, servers, Express, SQL, MVC, Progressive Web Apps, React, and many other frameworks, libraries, and packages.</div></li>
                </ul>

                <ul className="collection with-header">
                    <li className="collection-header"><i className="fas fa-bullseye">Goals</i></li>
                    <li className="collection-item"><div>I've developed this portfolio with links to some of my projects, as well as my Github account. I hope to use this to showcase my work and launch my career as a full stack developer!</div></li>
                </ul>
            </div>
        </div>



    )
}

export default About;