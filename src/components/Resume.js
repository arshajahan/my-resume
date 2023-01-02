import React from "react";
import './Resume.css';

const Resume = () => {
    return(
        <section className='resume section-main'>
            <div className='section-title'>
                Resume<a href='https://drive.google.com/file/d/15wK-HlLnuMZEngJDgLq8tptemIAwZ-2O/view?usp=share_link' target='blank' id='download'>Download Resume</a>
            </div>
            <div className='all-experience main-container'>
                <div className='experience-title main-title'>
                    Hands-on<br/>Experience
                </div>
                <div className='experiences group-main'>
                    <div className='one-experience single-main'>
                        <div className='duration'>
                            2022
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                                Software Testing Trainee
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>* Involved in analyzing FRS document, User stories & developing test plans, test cases, test script.</li>
                                    <li>* Proficient in Defect management, including Defect creation, modification, tracking, and reporting using JIRA.</li>
                                    <li>* Automating UI and Rest API using Selenium ,Rest Assured and PostMan.</li>
                                    <li>* Validated the database by executing SQL queries</li>
                                    <li>* Experience in working on POM Design pattern with Hybrid framework</li>
                                    <li>* Familiarized with BDD software development approach and writing scenario using cucumber and gherkin</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='one-experience single-main'>
                        <div className='duration'>
                            2017-2022
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                                IT support Tech(Freelance)
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>* As a freelancer worked in multiple ELV and IT projects with different companies.</li>
                                    <li>* Aquired skills in installation, testing and commisioning of projects include LAN, CCTV, PABX, GPON technologies.</li>
                                    {/* <li>* I'm a paragraph. Click here to add your own</li>
                                    <li>* text and edit me.  easy. Just click “Edit Text”</li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className='one-experience single-main'>
                        <div className='duration'>
                            2019-Present
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                                Freelance
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>* I'm a paragraph. Click here to add your own</li>
                                    <li>* text and edit me.  easy. Just click “Edit Text”</li>
                                    <li>* I'm a paragraph. Click here to add your own</li>
                                    <li>* text and edit me.  easy. Just click “Edit Text”</li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
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