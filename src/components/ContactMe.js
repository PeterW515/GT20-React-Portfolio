import React from "react";


function ContactMe() {

    return (
        <div className="row container section section-100vh clearfix" id="contact">
            <div className="row center-align">
                <h2><i className="small material-icons">email</i>Contact Me<i className="small material-icons">email</i></h2>
            </div>
            <div className="row">
                <div className="collection center-align">
                    <a href="mailto:phweigman@gmail.com" className="collection-item black-text">Email</a>
                    <a href="https://github.com/PeterW515" className="collection-item black-text" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/peter-weigman" className="collection-item black-text" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="./assets/Peter_Weigman_Resume.pdf" className="collection-item black-text" target="_blank" rel="noreferrer">Resume</a>


                </div>
            </div>
        </div>
    );

};

export default ContactMe;