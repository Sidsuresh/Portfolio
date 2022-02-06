import React, { Component } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';

const ContactMe = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_eymkkjc', 'template_owdiuoq', e.target, 'user_0ktTKpGbhJLANfb4wvSYH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div id='Contact' className='contact-container'>
            <div className='contact-title'>
                CONTACT-ME...
            </div>
            <div className='contact-content'>
                <div className='contact-form'>
                    <form onSubmit={sendEmail}>
                        <input placeholder='Your Name' type='text' id='name' name='name' required/>
                        <input placeholder='Your Email' type='email' id='email' name='email' required/>
                        <textarea placeholder='Your Message' id='msg' name='msg' required></textarea>
                        <input type='submit' value='Send' />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;