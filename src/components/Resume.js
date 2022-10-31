import React from "react";
import './Resume.css';

const Resume = () => {
    return(
        <section className='resume section-main'>
            <div className='section-title'>
                Resume<a href='#' id='download'>Download Resume</a>
            </div>
            <div className='all-experience main-container'>
                <div className='experience-title main-title'>
                    Work<br/>Experience
                </div>
                <div className='experiences group-main'>
                    <div className='one-experience single-main'>
                        <div className='duration'>
                            2019-Present
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                                Software Testing Engineer
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>I'm a paragraph. dfdsfdsfClick here to add your own</li>
                                    <li>text and edit mfdsf dsfdsf e.dfssdfdsfds  easy. Just click “Edit Text”</li>
                                    <li>I'm a paragraph. Click here to add your own</li>
                                    <li>text and edit me.  easy. Just click “Edit Text”</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='one-experience single-main'>
                        <div className='duration'>
                            2019-Present
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                                QA Engineer
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>I'm a paragraph.dfsdfds Click here to add your own</li>
                                    <li>text and edit me.  easy. Just click “Edit Text”</li>
                                    <li>I'm a paragraph. Click here to add your own</li>
                                    <li>text and edit me.  easy. Just click “Edit Text”</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='one-experience single-main'>
                        <div className='duration'>
                            2019-Present
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                                Freelance
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>I'm a paragraph. Click here to add your own</li>
                                    <li>text and edit me.  easy. Just click “Edit Text”</li>
                                    <li>I'm a paragraph. Click here to add your own</li>
                                    <li>text and edit me.  easy. Just click “Edit Text”</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='line'>
                <hr/>
            </div>

            <div className='education-container main-container'>
                <div className='education-title main-title'>
                    Education
                </div>
                <div className='educations group-main'>
                    <div className='one-education single-main'>
                        <div className='duration'>
                            2012-2016
                        </div>
                        <div className='education-content single-content'>
                            <div className='institute single-title'>
                                LBS College of Eng. |<br/>
                                Bachelor's of Technology
                            </div>
                            <div className='stream'>
                                Information Technology
                            </div>
                        </div>
                    </div>
                    <div className='one-education single-main'>
                        <div className='duration'>
                            2010-2012
                        </div>
                        <div className='education-content single-content'>
                            <div className='institute single-title'>
                                CHSS Chattanchal |<br/>
                                Higher Secondary
                            </div>
                            <div className='stream'>
                                Computer Science
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='line'>
                <hr/>
            </div>

            <section className='skill-container main-container'>
                <div className='skill-title main-title'>
                    Skills<br/>
                    & Expertise
                </div>
                <div className='all-skills group-main'>
                    <div className='single-main'>
                        <div className='skill-grid'>
                            <span>Java</span><span>Selenium</span><span>TestNG</span>
                            <span>Agile</span><span>Scrum</span><span>REST API</span>
                            <span>SQL</span><span>Postman</span><span>Maven</span>
                            <span>RestAssured</span><span>ReactJs</span><span>Jenkins</span>
                        </div>
                    </div>
                </div>

            </section>

        </section>

    );
}

export default Resume;