import React from 'react'
import Title from './Title'

const ToggleBtn = () => {
  const [btn , setBtn] = React.useState(true);
  const handlebtn = () => {
    setBtn(!btn);
  }
  return (
    <>
      <Title title="Toogle Button" />
      <button className='btn btn-success' onClick={handlebtn}>{btn?"Start":"Stop"}</button>
      <br />
    </>
  )
}

export default ToggleBtn