import React from 'react'
import './CardHeading.scss'

const CardHeading = (props) => {
    const { name, role } = props;
  return (
    <>
    <div className='card-heading'>
    <h4 className='card-heading__name'>Name:{name}</h4>
    <h4 className='card-heading__role'>Role:{role}</h4>
    </div>
    </>
  )
}

export default CardHeading