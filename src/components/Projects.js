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
                        treatat.com (02/2021 - present)
                    </div>
                    <div className='project-details'>
                    TreatAt offer you the online booking for medical facilities quite in advance to avoid any inconveniences during your medical treatment in India.
                    </div>
                    <div className='project-details'>
                        <b>Roles:</b> * Designed and developed public website and admin panel using ReactJs. 
                        * Implemented backend api using node expresss, Atlas cloud Mongodb used as database.
                        * Applications integrated with zoho desk, CI/CD to EC2 instance using github actions.
                    </div><br/>
                    <a href="https://treatat.com" target='_blank' rel='noreferrer'>www.treatat.com</a>
                </div>
                <div className='project-img'>
                    <a href="https://www.treatat.com" target='_blank' rel='noreferrer'><img alt='project_img' src='/my-resume/images/treatat.jpg'/></a>
                </div>
            </div>
            <div className='single-project'>
                <div className='project-contents'>
                    <div className='project-title'>
                        Marco CRM (Software testing)
                    </div>
                    <div className='project-details'>
                        Marco is a B2B CRM web-based application developed with the intention to keep track of everything that 
                        you are doing with the customers and to manage and optimize all the activities with the customers in a better way.
                    </div>
                    <div className='project-details'>
                        <b>Roles: </b>Prepared test cases, manual testing, UI Automation using
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
                        Assembly (Api testing)
                    </div>
                    <div className='project-details'>
                        Human resource management application developed for a technical staffing agency to handle activities 
                        like recruitement process, mapping of all employees to the client companies and also having a basic support portal for the employees.
                    </div>
                    <div className='project-details'>
                        <b>Roles: </b>Understanding swagger documentation, API testing using
                        Postman, Automating using RestAssured, verifying Database
                        using SQL queries after each API CRUD operation.
                    </div>
                </div>
                <div className='project-img'>
                    <img alt='project_img' src='/my-resume/images/project2.jpg'/>
                </div>
            </div>
            <div className='single-project'>
                <div className='project-contents'>
                    <div className='project-title'>
                        Sample React-Python Crud App
                    </div>
                    <div className='project-details'>
                        A simple application which we can use to store all contacts related to our daily business, like storing 'customers' and 'suppliers'
                        details by a sales executive.
                    </div>
                    <div className='project-details'>
                        <b>Roles: </b>Develop simple UI with react by which we can perform
                        adding new contact, edit and delete. Filtering contacts. Backend created using 
                        python Django rest framework, connected with sqllite database.
                    </div><br/>
                    <a href="https://github.com/arshajahan/react-python-crud-contactsApp" target='_blank' rel='noreferrer'>Github Repo</a>
                </div>
                <div className='project-img'>
                    <img alt='project_img' src='/my-resume/images/rproject.jpg'/>
                </div>
            </div>
        </section>
    );
}

export default Projects;