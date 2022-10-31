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
                        Project Name01
                    </div>
                    <div className='project-details'>
                        I'm a paragraph. Click here to add your 
                        own text and edit me.  easy. Just click “Edit 
                        Text” or double click me to add your own content and 
                        make changes to the font. a great place for you to 
                        tell a story and let your users know a little more about you.
                    </div>
                </div>
                <div className='project-img'>
                    <img alt='project_img' src='/my-resume/images/project.jpg'/>
                </div>
            </div>

            <div className='single-project'>
                <div className='project-contents'>
                    <div className='project-title'>
                        Project Name02
                    </div>
                    <div className='project-details'>
                        I'm a paragraph. Click here to add your 
                        own text and edit me.  easy. Just click “Edit 
                        Text” or double click me to add your own content and 
                        make changes to the font. a great place for you to 
                        tell a story and let your users know a little more about you.
                    </div>
                </div>
                <div className='project-img'>
                    <img alt='project_img' src='/my-resume/images/project.jpg'/>
                </div>
            </div>
        </section>
    );
}

export default Projects;