import React, { useState } from 'react'
import MinusButton from '../MinusButton/MinusButton'
import PlusButton from '../PlusButton/PlusButton'
import './Counter.scss'

const Counter = () => {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

  return (
    <>
    <h5 className='counter-heading'>Counter</h5>
    <div className='counter-display'>
        <h2 className='counter-display__count'>{count}</h2>
    </div>
    <div className='buttons'>
        <div className='increment' onClick={increment}>
        <PlusButton />
        </div>
        <div className='decrement' onClick={decrement}>
        <MinusButton />
        </div>
    </div>
    </>
  )
}

export default Counter