import React from "react";
import coffee_shop from '../../assets/fos_coffee_shop.png';
import weather_dash from '../../assets/weather_dashboard.png';
import tech_blog from '../../assets/tech_blog.png';
import note_taker from '../../assets/note_taker.png';
import code_quiz from '../../assets/code_quiz.png';
import pw_gen from '../../assets/password_gen.png';


function Portfolio() {

    const projects = [
        {
            imgSrc: coffee_shop,
            deployedApp: 'https://fos-coffee-shop.herokuapp.com/',
            repo: 'https://github.com/PeterW515/fos-coffee-shop',
            altText: 'This is a screenshot of the coffee shop web app.'
        },
        {
            imgSrc: weather_dash,
            deployedApp: 'https://peterw515.github.io/GT6-Weather-Dashboard/',
            repo: 'https://github.com/PeterW515/GT6-Weather-Dashboard',
            altText: 'This is a screenshot of the weather dashboard app.'
        },
        {
            imgSrc: tech_blog,
            deployedApp: 'https://gt14-mvc-tech-blog.herokuapp.com/',
            repo: 'https://github.com/PeterW515/GT14-MVC-Tech-Blog',
            altText: 'This is a screenshot of the tech blog app.'
        },
        {
            imgSrc: note_taker,
            deployedApp: 'https://peter-gt11-note-taker.herokuapp.com/',
            repo: 'https://github.com/PeterW515/GT11-Note-Taker',
            altText: 'This is a screenshot of the note taker app.'
        },
        {
            imgSrc: code_quiz,
            deployedApp: 'https://peterw515.github.io/GT4-code-quiz/',
            repo: 'https://github.com/PeterW515/GT4-code-quiz',
            altText: 'This is a screenshot of the code quiz app.'
        },
        {
            imgSrc: pw_gen,
            deployedApp: 'https://peterw515.github.io/GT3-password-generator/',
            repo: 'https://github.com/PeterW515/GT3-password-generator',
            altText: 'This is a screenshot of the password generator app.'
        }
    ];


    return (
        <div className="row container section section-100vh" id="myWork">
            {projects.map(project => (
                <div className="col s12 m6">
                    <div className="small card z-depth-5">
                        <div className="card-image">
                            <img width="300" src={project.imgSrc} alt={project.altText} />
                        </div>
                        <div className="card-action center-align">
                            <a className="waves-effect waves-light black-text blue-grey btn"
                                href={project.deployedApp} rel="noreferrer" target="_blank">Site</a>
                            <a className="waves-effect waves-light black-text blue-grey btn"
                                href={project.repo} rel="noreferrer" target="_blank">Repository</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default Portfolio;