import React from 'react'
// import CardHeading from '../CardHeading/CardHeading'
import CounterCard from '../CounterCard/CounterCard'
// import team from '../../data/ticket-data.js'
import './Card.scss'

const Card = ({name, role}) => {
    // const { name, role } = props;

  return (
    <>
    <div className='main-card'>
        <h4 className='main-card__info'>{name} {role}</h4>
        <CounterCard />
    </div>
    </>
  )
}

export default Card