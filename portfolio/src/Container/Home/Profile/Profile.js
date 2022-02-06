import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import './Profile.css'
const Profile = () => {
    return (
        <div id='Profile' className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>

                    <div className='profile-details-name'>
                        <span className='name'>
                            Hello, I am<br />Siddharth Suresh Nair ...
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='roles'>
                            <h1>
                                <Typewriter
                                    options={{
                                        strings: ["CREATIVE WEB/ APP DESIGNER 📱", "SAVVY DATA ANALYST 📈", "AVID AI/ML ENTHUSIAST 🤖", "ANALYTICAL PROBLEM SOLVER 💡", "PROFICIENT SPOKESPERSON 🗣️"],
                                        autoStart: true,
                                        pauseFor: 1000,
                                        loop: true
                                    }}
                                />
                            </h1>
                        </span>
                    </div>
                    <div className='profile-details-desc'>
                        An enthusiastic learner passionate to delve into complex engineering problems to come up with new and efficient solutions with hands-on experience in Data Science, Machine learning, A.I. and Software Engineering.
                    </div>
                    <div className='profile-options'>
                        <a href='Resume_new.pdf' download='Siddharth Suresh Nair.pdf'>
                            <button className='btn resume-btn'>Get Resume</button>
                        </a>
                        <div className='cols-icon'>
                            <a href='https://www.facebook.com/sid.suresh.24/'>
                                <FaFacebookSquare />
                            </a>
                            <a href='https://www.linkedin.com/in/siddharth-suresh-nair-a664b521a/'>
                                <FaLinkedin />
                            </a>
                            <a href='https://www.instagram.com/sidsuresh24/'>
                                <FaInstagram />
                            </a>
                            <a href='https://github.com/Sidsuresh'>
                                <FaGithubSquare />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;