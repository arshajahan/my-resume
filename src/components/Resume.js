import React from "react";
import './Resume.css';

const Resume = () => {
    return(
        <section className='resume section-main'>
            <div className='section-title'>
                Resume<a href='https://drive.google.com/file/d/1NUMYMUb-EqJujMQ3pNx0tW-1scN8dbFW/view?usp=share_link' target='blank' id='download'>Download Resume</a>
            </div>
            <div className='all-experience main-container'>
                <div className='experience-title main-title'>
                    Work Experience
                </div>
                <div className='experiences group-main'>
                    <div className='one-experience single-main'>
                        <div className='duration'>
                        02/2021 - Present
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                            Software Developer | <br/>TreatAt.com
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>* Developed and maintained web applications using the MERN stack.</li>
                                    <li>* Worked closely with the small cross-functional team to identify and prioritize project requirements.</li>
                                    <li>* Integrated Zoho Desk with a web application to enable customer
                                        service functionality, including the management of support
                                        tickets and customer inquiries using Zoho API.
                                    </li>
                                    <li>* Implemented CI/CD using github action to ec2 instance.</li>
                                    <li>* Experienced in using AWS EC2 for hosting web applications and SES for email.</li>
                                    <li>* Implemented responsive design to ensure web applications were accessible on multiple devices.</li>
                                    <li>* Assisted with the implementation of new features and functionality.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='one-experience single-main'>
                        <div className='duration'>
                        02/2019 - 01/2021
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                            Field Service Engineer | <br/>Etisalat UAE
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>* Providing technical support to the Etisalat customers at their premises or remotely.</li>
                                    <li>* Testing of new devices and software application.</li>
                                    <li>* Successfully installing new service on time, achieving KPIs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='one-experience single-main'>
                        <div className='duration'>
                        12/2016 - 01/2019
                        </div>
                        <div className='experience-content single-content'>
                            <div className='role single-title'>
                            IT Support Technician | <br/>Mechatronics Systems & Networks
                            </div>
                            <div className='responsibilities'>
                                <ul>
                                    <li>* Providing technical support to the Etisalat customers at their premises or remotely.</li>
                                    <li>* Testing of new devices and software application.</li>
                                    <li>* Successfully installing new service on time, achieving KPIs.</li>
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
                            <span>ReactJs</span><span>Nodejs</span><span>Mongodb</span>
                            <span>selenium</span><span>java</span><span>TestNG</span>
                            <span>SQL</span><span>Postman</span><span>Maven</span>
                            <span>RestAssured</span><span>Git</span><span>AWS</span>
                            <span>HTML</span><span>CSS</span><span>Javascript</span>
                        </div>
                    </div>
                </div>

            </section>

        </section>

    );
}

export default Resume;