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
                    <p>I'm a paragraph. Click here to add your own text and edit me. 
                        I’m a great place for you to tell a story and let your users know a 
                        little more about you.
                    </p>
                    <div className='pageLinks'>
                        <Link to='/my-resume/resume' id='resume'>Resume</Link>
                        <Link to='/my-resume/projects' id='projects'>Projects</Link>
                        <Link to='/my-resume/contact' id='contact'>Contact</Link>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default About;