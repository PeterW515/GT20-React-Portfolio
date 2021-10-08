import React from "react";
import './Footer.css'

function Footer() {
    return (
        <footer className="row valign-wrapper">
            <div className="col s3 left-align">
                <p>© 2021 Peter Weigman</p>
            </div>
            <div className="col s6 center-align">
                <a href="https://github.com/PeterW515" target="_blank" rel="noreferrer"><i className="fab fa-github-square"></i></a>
                <a href="https://www.linkedin.com/in/peter-weigman/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                <a href="https://stackoverflow.com/users/15526156/peterw515" target="_blank" rel="noreferrer"><i class="fab fa-stack-overflow"></i></a>
            </div>
            <div className="col s3"></div>
        </footer>
    )

}

export default Footer;

<a className="center" href="#!">More Links</a>
