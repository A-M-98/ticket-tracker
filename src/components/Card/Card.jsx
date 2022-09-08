import React from 'react'
// import CardHeading from '../CardHeading/CardHeading'
import CounterCard from '../CounterCard/CounterCard'
// import team from '../../data/ticket-data.js'
import './Card.scss'

const Card = (props) => {
    const { name, role } = props

  return (
    <div className='main-card'>
        <h4 className='card-heading__name'>{name} {role}</h4>
        <CounterCard />
    </div>
  )
}

export default Card