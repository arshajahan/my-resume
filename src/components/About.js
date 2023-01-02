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
                    Experienced IT professional having full stack web developing experience and a passion for software 
                    development. Skilled in React, Node.js, and MongoDB, with trained and experienced in end-to-end application 
                    testing and API testing. Seeking a challenging role in software industry where I can utilize my technical skills 
                    and knowledge to drive business success.
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