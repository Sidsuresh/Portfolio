import React from "react";
import './Education.css'

const Education = () => {
    return (
        <div className="education-container">
            <div className="education-list">
                <ul>
                    <li>
                        <div className="education-header">
                            <div className="education-name">Bachelor of Technology: Computer Science Engineering</div>
                            <div className="education-date">July 2019 - Present</div>
                        </div>
                        <div className="education-scl">Vellore Institute of Technology, Vellore</div>
                        <div className="education-gr">CGPA: 9.2</div>
                    </li>
                    <li>
                        <div className="education-header">
                            <div className="education-name">Higher Secondary | Class 12</div>
                            <div className="education-date">June 2017 - March 2018</div>
                        </div>
                        <div className="education-scl">St. Antony's Public School, Anakkal</div>
                        <div className="education-gr">Percentage: 91.6%</div>
                    </li>
                    <li>
                        <div className="education-header">
                            <div className="education-name">Secondary | Class 10</div>
                            <div className="education-date">April 2015 - March 2016</div>
                        </div>
                        <div className="education-scl">Delhi Private School, Sharjah</div>
                        <div className="education-gr">CGPA: 9.4</div>
                    </li>
                </ul>
            </div>
        </div>        
    );
}

export default Education;