import React from "react";
import './Contact.css';

const Contact = () => {

    const submitHandler = () =>{
        alert("Sorry, this option is not available now. Kindly contact me one +919544527027 or Shajahan.ar@hotmail.com");
    }

    return(
        <section className='contact-main section-main'>
            <div className='contact-title section-title'>
                Contact
            </div>
            <div className='contact-flex'>
                <div className='all-contacts'>
                    Looking forward to hearing from you
                    <div className='single-contact'>
                        Phone<br/>
                        <a href=''>+919544527027</a>
                    </div>
                    <div className='single-contact'>
                        Email<br/>
                        <a href=''>shajahan.ar@hotmail</a>
                    </div>
                </div>
                <div className='contact-form'>
                    <form>
                        <div className='row-flex'>
                            <div className='input'>
                                First Name<br/>
                                <input type='text'/>
                            </div>
                            <div className='input'>
                                Last Name<br/>
                                <input type='text'/>
                            </div>
                        </div>
                        <div className='row-flex'>
                            <div className='input'>
                            Email *<br/>
                                <input type='text'/>
                            </div>
                            <div className='input'>
                                Subject<br/>
                                <input type='text'/>
                            </div>
                        </div>
                        <div className='row-flex message-row'>
                            <div className='input'>
                                Message<br/>
                                <input id='message' type='textarea'/>
                            </div>
                            <div className='submit-btn'>
                                <a href='#' onClick={submitHandler}>Submit</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;