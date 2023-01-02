import React from "react";
import './Projects.css';

const Projects = () => {
    return(
        <section className='project-main section-main'>
            <div className='section-title'>
                Projects
            </div>
            <div className='single-project'>
                <div className='project-contents'>
                    <div className='project-title'>
                        Marco CRM
                    </div>
                    <div className='project-details'>
                        Marco is a B2B CRM web-based application developed with the intention to keep track of everything that 
                        you are doing with the customers and to manage and optimize all the activities with the customers in a better way.
                    </div>
                    <div className='project-details'>
                        <b>Roles:</b>Prepared test cases, manual testing, UI Automation using
                        selenium, Bug reporting in JIRA, created maven project,
                        framework from scratch, continuous integration using jenkins.
                    </div>
                </div>
                <div className='project-img'>
                    <img alt='project_img' src='/my-resume/images/project1.jpg'/>
                </div>
            </div>

            <div className='single-project'>
                <div className='project-contents'>
                    <div className='project-title'>
                        Assembly
                    </div>
                    <div className='project-details'>
                        Human resource management application developed for a technical staffing agency to handle activities 
                        like recruitement process, mapping of all employees to the client companies and also having a basic support portal for the employees.
                    </div>
                    <div className='project-details'>
                        <b>Roles:</b>Understanding swagger documentation, API testing using
                        Postman, Automating using RestAssured, verifying Database
                        using SQL queries after each API CRUD operation.
                    </div>
                </div>
                <div className='project-img'>
                    <img alt='project_img' src='/my-resume/images/project2.jpg'/>
                </div>
            </div>
        </section>
    );
}

export default Projects;