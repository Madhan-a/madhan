import React from 'react'
import'./ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
    <div className='name-container'>
        <input type='text' name="firstname"placeholder='firstname'/>
        <input type='text' name="Lastname"placeholder='Lastname'/>
       </div>
       <input type='text' name='email' placeholder='email'/>
       <textarea typeof='text'name='message' placeholder='message' rows={3}/>
       <button>SEND</button>
       </form>
       </div>
  )
}

export default ContactForm
