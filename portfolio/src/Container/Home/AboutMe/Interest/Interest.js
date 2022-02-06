import React from "react";
import './Interest.css';

const Interest = () => {
    return (
        <div className='interest-container'>
            <div className="interest-list">
                <ul>
                    <li>
                        <div className="interest-header">Competitive Coding:</div>
                        <div className="interest-info">In addition to delving into Web Designing and Machine Learning, I also like to spend my free time on testing and improving my Data Structure and Algorithm capabilities</div>
                    </li>
                    <li>
                        <div className="interest-header-2">Football / Soccer:</div>
                        <div className="interest-info">Being a massive fan of F.C. Barcelona and Manchester City, I love watching a good football match on the weekends to relax myself.</div>
                    </li>
                    <li>
                        <div className="interest-header">Music:</div>
                        <div className="interest-info">I often find myself listening to music between classes and while coding. My favorite genre usually include Pop, UK Grime and UK Drill</div>
                    </li>
                    <li>
                        <div className="interest-header-2">Gaming:</div>
                        <div className="interest-info">Apart from all these, I also like to play games in my free time to test my reflexes and have a good time with my friends</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Interest;