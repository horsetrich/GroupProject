import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

    const Contact = () => {
        const form = useRef();
    
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm("service_sq657pn", "template_lnw9r5f", form.current)
            .then((result) => {
              console.log(result.text);
              alert('Message sent successfully!');
            }, (error) => {
              console.log(error.text);
              alert('Failed to send message, please try again.');
            });
        };
      
        return (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" required />
            <label>Email</label>
            <input type="email" name="user_email" required />
            <label>Message</label>
            <textarea name="message" required />
            <input type="submit" value="Send" />
          </form>
        );
      };

export default Contact;