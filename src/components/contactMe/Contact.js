import React from 'react'
import'./Contact.css'
import ContactCard from './ContactCard'
import 'bootstrap-icons/font/bootstrap-icons.css';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className='contact-container'>
      <h5>Contact Me </h5>
      <div className='contact-content'>
        <div style={{flex:1}}>
        <i className="bi bi-envelope" ></i>
         <ContactCard
         text="madhanayyappan6000@gmail.com"/>
         <i class="bi bi-github"></i>
        <ContactCard
        text="https://github.com/Madhan-a"
        />
          
        </div>
        <div style={{flex:1}}></div>
        <ContactForm/>
      </div>
      
    </section>
  )
}

export default Contact
