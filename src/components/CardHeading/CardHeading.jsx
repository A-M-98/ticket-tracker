import React from 'react'
import './CardHeading.scss'
// adding name and role of the emplyees using props and head tags

const CardHeading = (props) => {
    const { name, role } = props;
  return (
    // Name and Role headings for the ticket cards
    <>
    <div className='card-heading'>
    <h6 className='card-heading__name'>{name}</h6>
    <h6 className='card-heading__role'>{role}</h6>
    </div>
    </>
  )
}

export default CardHeading