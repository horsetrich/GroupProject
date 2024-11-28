import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
const dotenv = require('dotenv');


dotenv.config();

    const Contact = () => {
        const form = useRef();
    
        const sendEmail = (e) => {
          e.preventDefault();
      
        
            emailjs
              .sendForm(process.env.EMAILJS_SERVICEID, process.env.EMAIL_TEMPLATE, form.current, {
                publicKey: process.env.EMAILJS_PUBLICKEY,
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
          };
      
        return (
          <form id="myForm" ref={form} onSubmit={sendEmail}>
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea class="form-control" id="message" name="message" rows="5"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" value="Send">Submit</button>
          </form>
        );
    };

export default Contact;