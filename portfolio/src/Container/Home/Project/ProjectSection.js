import React from 'react';
import './ProjectSection.css';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Slider from '../../Carousel/Slider';



const ProjectSection = () => {
    return (
        <div id='Project' className='project-section-container'>
            <div className='project-section-heading'>
                PROJECTS...
            </div>
            <div className='project-disp'>
                <Slider />
            </div>
        </div>
    );

}

export default ProjectSection;
