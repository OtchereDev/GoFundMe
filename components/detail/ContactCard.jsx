import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons'

const ContactCard = ({contact}) => {
  return (
    <div >
      <div className="flex items-center">
          <div className="flex justify-center  items-center h-10 w-10 rounded-full mr-4 bg-green-100">
              <FontAwesomeIcon icon={ faUser } />
              
          </div>
          <h3 className="text-lg ">
              {contact.fullName} 
          </h3>
      </div>
      <div className="flex items-center mt-2">
          <div className="flex justify-center  items-center h-10 w-10 rounded-full mr-4 bg-green-100">
              <FontAwesomeIcon icon={ faEnvelope } />
              
          </div>
          <h3 className="text-lg ">
            <a href={`mailto:${contact.fullName}:${contact.email}`}>
              {contact.email}

            </a>
          </h3>
      </div>
      
      
    </div>
  )
}

export default ContactCard
