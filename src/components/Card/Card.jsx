import React from 'react'
import CardHeading from '../CardHeading/CardHeading'
import CounterCard from '../CounterCard/CounterCard'
import './Card.scss'
// the main ticket Card

const Card = (props) => {
    //passing down and adding props
    const { info } = props

  return (
    <div className='main-card'>
        <CardHeading name={info.name} role={info.role} />
        <CounterCard />
    </div>
  )
}

export default Card