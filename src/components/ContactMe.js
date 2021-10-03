import React from "react";


function ContactMe() {

    return (
        <div class="row container section section-100vh clearfix" id="contact">
            <div class="row center-align">
                <h2><i class="small material-icons">email</i>Contact Me<i class="small material-icons">email</i></h2>
            </div>
            <div class="row">
                <div class="collection center-align">
                    <a href="mailto:phweigman@gmail.com" class="collection-item black-text">Email</a>
                    <a href="https://github.com/PeterW515" class="collection-item black-text" target="_blank" rel="noreferrer">Github</a>
                    <a href="www.linkedin.com/in/peter-weigman" class="collection-item black-text" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="./assets/Peter_Weigman_Resume.pdf" class="collection-item black-text" target="_blank" rel="noreferrer">Resume</a>


                </div>
            </div>
        </div>
    );

};

export default ContactMe;