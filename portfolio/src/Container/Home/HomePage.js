import React from 'react';
import ProjectSection from './Project/ProjectSection';
import Profile from './Profile/Profile';
import AboutMe from './AboutMe/AboutMe';
import ContactMe from './ContactMe/ContactMe';

const HomePage = () => {
    return (
        <div>
            <Profile />
            <AboutMe />
            <ProjectSection />
            <ContactMe />
        </div>
    );
}

export default HomePage;