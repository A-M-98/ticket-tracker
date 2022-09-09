import React from 'react'
import './CardHeading.scss'

const CardHeading = (props) => {
    const { name, role } = props;
  return (
    <>
    <div className='card-heading'>
    <h6 className='card-heading__name'>{name}</h6>
    <h6 className='card-heading__role'>{role}</h6>
    </div>
    </>
  )
}

export default CardHeading