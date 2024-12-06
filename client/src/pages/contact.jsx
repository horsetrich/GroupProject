import React, { useState, useRef } from 'react';




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

          <div className="container-fluid p-0">
            <div className="position-relative">
                <div className="hero-section text-white text-center py-5"
                    style={{
                        background: 'linear-gradient(to right, #FFD1DC, #FFFACD)',
                        minHeight: '400px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <div className="container">
                        <h1 className="display-4 mb-4" style={{ color: '#d68a7d' }}>Contact Us</h1>
                    </div>
                </div>
            </div>


            <div className="container my-5">
            <div className="row justify-content-center">
            <div className="col-md-8">
          <form id="myForm" ref={form} onSubmit={sendEmail}>
            
            <div class="form-group mb-4">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
                required
              />
            </div>

            <div class="form-group mb-4">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
                required
              />
            </div>
            
            <div class="form-group mb-4">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
                required
              />
            </div>

            <div class="form-group mb-4">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
              class="form-control" 
              id="message" 
              name="message" 
              placeholder="enter your message..."
              rows="5"></textarea>
            </div>


            <div className="text-center">
            <button type="submit" class="btn" style={{ backgroundColor: '#d68a7d', color: '#fff' }} value="Send">Submit</button>
          </div>
          </form>
          </div>
          </div>
          </div>
          </div>
        );
    };

export default Contact;
