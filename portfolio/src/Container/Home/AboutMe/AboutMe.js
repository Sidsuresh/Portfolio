import React from 'react';
import { useState } from 'react';
import './AboutMe.css';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';
import { IoIosFootball } from 'react-icons/io';
import Intro from './Intro/Intro';
import Skill from './Skill/Skill';
import Education from './Education/Education';
import Interest from './Interest/Interest';

const AboutMe = () => {

    const [sdOpt, setsdOpt] = useState('About_Me');
    const [isActive1, setActive1] = useState(true);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);
    return (
        <div id='Resume' className='about-container'>
            <div className='about-heading'>RESUME...</div>
            <div className='about-content'>
                <div className='about-sidebar'>
                    <ul>
                        <div className='about-list'>
                            <div className='about-block'>
                                <div className='about-icons'>
                                    <BsInfoCircleFill />
                                </div>
                                <button className={isActive1 ? 'about-button-active': 'about-button'} onClick={() => {setsdOpt('About_Me'); setActive1(true); setActive2(false); setActive3(false); setActive4(false)}}> About Me </button>
                            </div>
                            <div className='about-block'>
                                <div className='about-icons'>
                                    <FaLaptopCode />
                                </div>
                                <button className={isActive2 ? 'about-button-active': 'about-button'} onClick={() => {setsdOpt('Skill'); setActive1(false); setActive2(true); setActive3(false); setActive4(false)}}> Programming Skills </button>
                            </div>
                            <div className='about-block'>
                                <div className='about-icons'>
                                    <FaGraduationCap />
                                </div>
                                <button className={isActive3 ? 'about-button-active': 'about-button'} onClick={() => {setsdOpt('Education'); setActive1(false); setActive2(false); setActive3(true); setActive4(false)}}> Education </button>
                            </div>
                            <div className='about-block'>
                                <div className='about-icons'>
                                    <IoIosFootball />
                                </div>
                                <button className={isActive4 ? 'about-button-active': 'about-button'} onClick={() => {setsdOpt('Interest'); setActive1(false); setActive2(false); setActive3(false); setActive4(true)}}> Interests </button>
                            </div>    
                        </div>
                    </ul>
                </div>
                <div className='about-active-content'>
                    {sdOpt === 'About_Me' ? (<Intro />) : null}
                    {sdOpt === 'Skill' ? (<Skill />) : null}
                    {sdOpt === 'Education' ? (<Education />) : null}
                    {sdOpt === 'Interest' ? (<Interest />) : null}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;