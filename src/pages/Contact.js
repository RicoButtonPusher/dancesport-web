import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useForm, ValidationError } from '@formspree/react';
import './CSS-files/Contact.css'


// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help


function Contact() {
  const [state, handleSubmit] = useForm("xvodprdb");
  if (state.succeeded) {
      return <>
      <div className="contact-headline">
        Contact Us!
      </div>
      <div className="contact-container">
        <div className="contact-form">
          <div className="message-sent">
            <p>Your Message Has Been Sent!</p>
          </div>
          <div className="message-sent">
            <p> We will get back to you as soon as possible</p>
          </div>
        </div>
      </div>
      
      
      </>
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="contact-headline">
        Contact Us!
      </div>
        <div className="contact-container">
          <div className="contact-form">
            <div className="contact-name">
              <label htmlFor="name">
              Full Name
              </label>
              <input
                id="name"
                type="name" 
                name="name"
              />
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={state.errors}
              />
            </div>
            
            <div className="contact-email">
              <label htmlFor="email">
              Email Address
              </label>
              <input
                id="email"
                type="email" 
                name="email"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>
            

            <div className="contact-subject">
              <label htmlFor="subject">
              Subject
              </label>
              <input
                id="subject"
                type="subject" 
                name="subject"
                errors={state.errors}
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
              />
            </div>
            
            <div className="contact-message">
              <label htmlFor="message">
              Message
              </label>
              <textarea
                id="message"
                name="message"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
            </div>
            <div className="button">
              <button type="submit" disabled={state.submitting}>
                Send
              </button>
            </div>
            
          </div>
          
        </div>
      </form>
    </>
  );
}

export default Contact;