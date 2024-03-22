import React from 'react'
import './ContactCard.css'

const ContactCard = ({text}) => {
  return (
    <div className='contact-details-card'>
      <div className='"bi bi-person-lines-fill"'>
        
        
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ContactCard
