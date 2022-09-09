import React, { useState } from 'react'
import MinusButton from '../MinusButton/MinusButton'
import PlusButton from '../PlusButton/PlusButton'
import './Counter.scss'

const Counter = () => {

    const [count, setCount] = useState(0);
// incrementing with the + button
    const increment = () => {
        setCount(count + 1);
    }

// incrementing with the + button and making sure the counter does not go below 0
    const decrement = () => {
        if(count === 0) {
            return;
        }
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