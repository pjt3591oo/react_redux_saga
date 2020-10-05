import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { ASYNC_INCREMENT_REQUEST, ASYNC_DECREMENT_REQUEST } from '../../store/modules/counter'

const Counter = props => {
  let { counter = 0 } = useSelector(state => ({
    counter: state.counter
  }))

  let dispatch = useDispatch()

  return (
    <>
      <h3>{counter}</h3>
      <button onClick={() => dispatch({type: ASYNC_INCREMENT_REQUEST})} >증가</button>
      <button onClick={() => dispatch({type: ASYNC_DECREMENT_REQUEST})} >감소</button>
    </>
  )
}

export default Counter