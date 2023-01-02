import React from "react";
import { Link } from "react-router-dom";
import './About.css';

const About = () => {

    return(
        <section className='banner'>
            <div className='brief'>
                <div className='dp'>
                    <img src='/my-resume/images/dp2.jpeg' alt='profile'/>
                </div>
                <div className='aboutMe'>
                    <h2>Hello</h2>
                    <h3>A Bit About Me</h3>
                    <p>
                        IT Professional graduate recently trained & skilled in Software Testing who worked on multiple live
                        projects, end-to-end application testing, proficient in Web App testing, Test Automation and API testing.
                        Well prepared to work in a challenging environment where I can utilize my skills and knowledge.
                    </p>
                    <div className='pageLinks'>
                        <Link to='/resume' id='resume'>Resume</Link>
                        <Link to='/projects' id='projects'>Projects</Link>
                        <Link to='/contact' id='contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default About;