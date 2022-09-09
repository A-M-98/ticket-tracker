import React from 'react'
import CardHeading from '../CardHeading/CardHeading'
import CounterCard from '../CounterCard/CounterCard'
// import team from '../../data/ticket-data.js'
import './Card.scss'

const Card = (props) => {
    const { info } = props

  return (
    <div className='main-card'>
        <CardHeading name={info.name} role={info.role} />
        <CounterCard />
    </div>
  )
}

export default Card