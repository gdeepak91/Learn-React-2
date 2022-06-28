import React from 'react'

const Title = (props) => {
  return (
    <>
      <nav className='navbar navbar-light bg-dark'>
        <span className='h1 text-light'>{props.title}</span>
      </nav>
      <br />
      <br />
    </>
  )
}

export default Title