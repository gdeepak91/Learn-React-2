import React from 'react'
import Title from './Title'

const date = () => {
  // const date = new Date();
  const date = new Date();
  return (
    <>
      <Title title="Date"/>
      <h1>{date.toDateString()}</h1>
      <br />
    </>
  )
}

export default date