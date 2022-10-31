import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <section className='footercontainer'>
            <div id='line'>
                <hr/>
            </div>
            <div className='footer'>
                <div className='content'>
                    <span className='label'>Phone</span>
                    <a href='tel:+919544527027'>+919544527027</a>
                </div>
                <div className='content'>
                    <span className='label'>Email</span>
                    <a href='mailto:shajahan.ar@hotmail.com'>shajahan.ar@hotmail.com</a>
                </div>
                <div className='content'>
                    <span className='label'>Follow me</span>
                    <div className='icons'>
                        <a href='https://www.linkedin.com/in/shajahan-ar/' target='blank' className='fa-brands fa-linkedin'></a>
                        <a href='https://github.com/arshajahan' target='blank' className='fa-brands fa-github'></a>
                        <a href='https://www.facebook.com/saaji03/' target='blank' className='fa-brands fa-facebook'></a>
                        <a href='https://api.whatsapp.com/send?phone=+919544527027&text=Hello%20Shajahan' target='blank' className='fa-brands fa-whatsapp'></a>
                    </div>
                </div>

                <div className='content'>
                    <a href='#'>© 2023 By Shah Jahan.</a>
                    <a href='#'>Created with ReactJs</a>
                </div>
            </div>
        </section>
    );
}

export default Footer;