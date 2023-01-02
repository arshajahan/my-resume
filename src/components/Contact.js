import React, { useState } from "react";
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";

const Contact = () => {

    const navigate = useNavigate();
    const [enteredFname, setEnteredFname] = useState('');
    const [enteredLname, setEnteredLname] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredSubject, setEnteredSubject] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const sendEmail = (e) =>{

        e.preventDefault();
        if(isEmailValid){
            console.log(e.target);
            console.log(e.target.reset());
            setEnteredFname('');
            setEnteredLname('');
            setEnteredEmail('');
            setEnteredSubject('');
            setEnteredMessage('');
            alert("Thank you, will contact you as soon as possible.");
            emailjs.sendForm('demogmail_27', 'resume_arshajahan', e.target, 'KUzVkwYzFknGyg658')
            .then((result) => {
                console.log(result);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
        else{
            alert("Kindly fill correct email and all other details");
        }
    }

    const fnameChangeHandler = (e) => {
        setEnteredFname(e.target.value);
    }
    const lnameChangeHandler = (e) => {
        setEnteredLname(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value);
    }
    const subjectChangeHandler = (e) => {
        setEnteredSubject(e.target.value);
    }
    const messageChangeHandler = (e) => {
        setEnteredMessage(e.target.value);
    }

    const [isEmailValid, setEmailValid] = useState(false);

    const checkEmailValid = () => {
        let res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(enteredEmail);
        setEmailValid(res);
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
                    <form onSubmit={sendEmail}>
                        <div className='row-flex'>
                            <div className='input'>
                                First Name<br/>
                                <input 
                                    type='text'
                                    value={enteredFname}
                                    onChange={fnameChangeHandler}
                                    name='from_name'
                                    required
                                />
                            </div>
                            <div className='input'>
                                Last Name<br/>
                                <input 
                                    type='text'
                                    value={enteredLname}
                                    onChange={lnameChangeHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row-flex'>
                            <div className='input'>
                            Email *<br/>
                                <input 
                                    type='text'
                                    value={enteredEmail}
                                    onChange={emailChangeHandler}
                                    onBlur={checkEmailValid}
                                    name='from_email'
                                    required
                                />
                            </div>
                            <div className='input'>
                                Subject<br/>
                                <input 
                                    type='text'
                                    name='subject'
                                    value={enteredSubject}
                                    onChange={subjectChangeHandler}
                                    required
                                />
                            </div>
                        </div>
                        <div className='row-flex message-row'>
                            <div className='input'>
                                Message<br/>
                                <input 
                                    id='message' 
                                    name='message'
                                    type='textarea'
                                    value={enteredMessage}
                                    onChange={messageChangeHandler}
                                    required
                                />
                            </div>
                            <div className='submit-btn'>
                                <button>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;