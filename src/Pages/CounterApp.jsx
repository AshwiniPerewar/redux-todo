import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CounterDec, CounterInc } from '../Store/action';

const CounterApp = () => {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.count);


  return (
    <div>CounterApp:{count}
    <div>
      <button onClick={()=>dispatch(CounterDec())}>-</button>
      <button  onClick={()=>dispatch(CounterInc())}>+</button>
      </div></div>
  )
}

export default CounterApp