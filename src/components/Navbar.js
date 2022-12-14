import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{


    const [isActive, setActive] = useState(false);
    const menuHandler = () => {
        setActive(!isActive);
    };

    window.addEventListener('scroll', () => {
        if(isActive === true)
            setActive(!isActive);
    });

    
    const linkHandler = (i) =>{
        if(isActive===true)
            setActive(!isActive);
    }

    return(
        <nav>
            <div className='navMain'>
                <Link to='/' className='heading'>
                    <span id='bullet'></span>
                    <h2 className='profileName'>
                            Shajahan AR
                        <span id='title'>Software Developer</span>
                    </h2>
                </Link>
                <div className={`navLinks ${isActive ? "active" : ""}`}>
                    <ul className='links'>
                        <li><Link to='/resume' onClick={linkHandler}>Resume</Link><span className='spanbar'>|</span></li>
                        <li><Link to='/projects' onClick={linkHandler}>Projects</Link><span className='spanbar'>|</span></li>
                        <li><Link to='/contact' onClick={linkHandler}>Contact</Link></li>
                    </ul>
                </div>
                <span className={`menubtn fa-solid  ${isActive ? "fa-times" : "fa-bars"}`} onClick={menuHandler}></span>
            </div>
        </nav>
    );
}

export default Navbar;