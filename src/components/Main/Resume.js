import React from "react";
import resume from '../../assets/Peter_Weigman_Resume.pdf'

function Resume() {


    return (
        <div className="row">
            <div className="row center-align"><a href={resume} class="waves-effect waves-light btn" rel="noreferrer" target="_blank">Download Resume</a></div>
            <div className="col m6 s12 center-align">

                <ul className="collection with-header">
                    <li className="collection-header"><i className="fas fa-server">Back End Skills</i></li>
                    <li className="collection-item"><div>Node JS</div></li>
                    <li className="collection-item"><div>OOP</div></li>
                    <li className="collection-item"><div>Express JS</div></li>
                    <li className="collection-item"><div>MySQL</div></li>
                    <li className="collection-item"><div>MVC</div></li>
                    <li className="collection-item"><div>MongoDB</div></li>
                    <li className="collection-item"><div>PWA</div></li>
                </ul>

            </div>
            <div className="col m6 s12 center-align">

                <ul className="collection with-header">
                    <li className="collection-header"><i className="fas fa-desktop">Front End Skills</i></li>
                    <li className="collection-item"><div>HTML</div></li>
                    <li className="collection-item"><div>CSS</div></li>
                    <li className="collection-item"><div>Javascript</div></li>
                    <li className="collection-item"><div>Web APIs</div></li>
                    <li className="collection-item"><div>React</div></li>
                </ul>

            </div>
        </div>



    )
}

export default Resume;