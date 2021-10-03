import React from "react";
import coffee_shop from '../assets/fos_coffee_shop.png'
import weather_dashboard from '../assets/weather_dashboard.png'
import tech_blog from '../assets/tech_blog.png'
import note_taker from '../assets/note_taker.png'
import code_quiz from '../assets/code_quiz.png'
import password_gen from '../assets/password_gen.png'



function MyWork() {

    return (
        <div class="row container section section-100vh" id="myWork">
            <div class="row center-align">
                <h2><i class="small material-icons">work</i>My Work<i class="small material-icons">work</i></h2>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="small card z-depth-5">
                        <div class="card-image">
                            <img class="materialboxed" width="300" src={coffee_shop} alt="screenshot of online ordering system" />
                        </div>
                        <div class="card-action center-align">
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://fos-coffee-shop.herokuapp.com/" target="_blank" rel="noreferrer">Site</a>
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://github.com/PeterW515/fos-coffee-shop" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6">
                    <div class="small card z-depth-5">
                        <div class="card-image">
                            <img class="materialboxed" width="300" src={weather_dashboard} alt="screenshot of weather dashboard" />
                        </div>
                        <div class="card-action center-align">
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://peterw515.github.io/GT6-Weather-Dashboard/" target="_blank" rel="noreferrer">Site</a>
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://github.com/PeterW515/GT6-Weather-Dashboard" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6">
                    <div class="small card z-depth-5">
                        <div class="card-image">
                            <img class="materialboxed" width="300" src={tech_blog} alt="screenshot of tech blog" />
                        </div>
                        <div class="card-action center-align">
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://gt14-mvc-tech-blog.herokuapp.com/" target="_blank" rel="noreferrer">Site</a>
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://github.com/PeterW515/GT14-MVC-Tech-Blog" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                </div>


                <div class="col s12 m6">
                    <div class="small card z-depth-5">
                        <div class="card-image">
                            <img class="materialboxed" width="300" src={note_taker} alt="screenshot of note taker" />
                        </div>
                        <div class="card-action center-align">
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://peter-gt11-note-taker.herokuapp.com/" target="_blank" rel="noreferrer">Site</a>
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://github.com/PeterW515/GT11-Note-Taker" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6">
                    <div class="small card z-depth-5">
                        <div class="card-image">
                            <img class="materialboxed" width="300" src={code_quiz} alt="screenshot of code quiz" />
                        </div>
                        <div class="card-action center-align">
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://peterw515.github.io/GT4-code-quiz/" target="_blank" rel="noreferrer">Site</a>
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://github.com/PeterW515/GT4-code-quiz" target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                </div>

                <div class="col s12 m6">
                    <div class="small card z-depth-5">
                        <div class="card-image">
                            <img class="materialboxed" width="300" src={password_gen} alt="screenshot of password generator" />
                        </div>
                        <div class="card-action center-align">
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://peterw515.github.io/GT3-password-generator/" target="_blank" rel="noreferrer">Site</a>
                            <a class="waves-effect waves-light black-text blue-grey btn"
                                href="https://github.com/PeterW515/GT3-password-generator"
                                target="_blank" rel="noreferrer">Repository</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default MyWork;