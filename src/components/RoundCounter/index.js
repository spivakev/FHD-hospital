import React from 'react'
import './style.css'

const RoundCounter = (props) => {
  let count = props.count
  return <span className="round-counter">{count}</span>
}

export default RoundCounter;

