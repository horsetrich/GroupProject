<<<<<<< HEAD
import React, { useState } from 'react';

function contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        });
    };

    return (
        <div>

            <fieldset>
            <h1>Contact Elegant Cakes</h1>
                <hr />
                <div id="contactLogo">
                    <p>Phone Number: (416)111-1111</p>
                    <p>Email Address: order@elegantcakes.com</p>
                </div>

                <legend>Questions or Comments?</legend>
                <h2>Get in touch</h2>
                <form name='regForm' onSubmit={handleSubmit} onReset={handleReset}>
                    <p><label htmlFor="firstName">First name:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
                        <input type="text" name="firstName" tabIndex="1" size="27" value={formData.firstName} onChange={handleChange} /></p>
                    <p><label htmlFor="lastName">Last name:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
                        <input type="text" name="lastName" tabIndex="3" size="27" value={formData.lastName} onChange={handleChange} /></p>
                    <p><label htmlFor="email">Email Address:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
                        <input type="text" name="email" tabIndex="5" size="27" value={formData.email} onChange={handleChange} /></p>
                    <p><label htmlFor="phone">Contact Number:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
                        <input type="number" name="phone" tabIndex="7" size="27" value={formData.phone} onChange={handleChange} /></p>
                    <p><label htmlFor="message">Message:<sup style={{ color: 'rgb(0, 0, 0)' }}>*</sup> </label>
                        <textarea id="txtArea" name="message" rows="5" cols="25" value={formData.message} onChange={handleChange}></textarea>
                        <br />
                        <input className="button" type="submit" name="submit" value="Send" tabIndex="21" /> <br></br>
                        <input className="button" type="reset" name="reset" value="Clear" tabIndex="21" />
                    </p>
                </form>
                <br />

            </fieldset>
            <hr></hr>
        </div>

    );
}

export default contact;
=======
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';




    const Contact = () => {
        const form = useRef();
    
        const sendEmail = (e) => {
          e.preventDefault();
      
        
            emailjs
              .sendForm(import.meta.env.VITE_EMAILJS_SERVICEID, import.meta.env.VITE_EMAIL_TEMPLATE, form.current, {
                publicKey: import.meta.env.VITE_EMAILJS_PUBLICKEY,
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
>>>>>>> upstream/main
