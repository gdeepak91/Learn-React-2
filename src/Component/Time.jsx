import React from 'react'
import Title from './Title'

const Time = () => {
  const date = new Date();

  return (
    <>
      <Title title="Time"/>
      <h2>{date.toLocaleTimeString()}</h2>
      <br />
    </>
  )
}

export default Time