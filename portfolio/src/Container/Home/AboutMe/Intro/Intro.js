import React from "react";
import './Intro.css'
const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro-info">
                <div className="intro-text">
                    I am an enthusiastic learner passionate to delve into complex engineering problems to come up with new and efficient solutions with hands-on experience in Data Science, Machine learning, A.I. and Software Engineering.
                </div>
            </div>
            <div className="intro-list">
                <div className="intro-hlgt">
                    <div className='intro-heading'>Here are a few highlights:</div>
                    <ul>
                        <li>CREATIVE WEB/ APP DESIGNER</li>
                        <li>SAVVY DATA ANALYST</li>
                        <li>AVID AI/ML ENTHUSIAST</li>
                        <li>ANALYTICAL PROBLEM SOLVER</li>
                        <li>PROFICIENT SPOKESPERSON</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Intro;