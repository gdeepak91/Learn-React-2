import React from 'react'
import Title from './Title';

const Disablebtn = () => {
  const [disable , setDisable] = React.useState(false);
  return (
    <>
      <Title title="Disable Button "/>
      <button className='btn btn-info' disabled={disable} onClick={() => setDisable(true)} >Click btn</button>
    </>
  )
}

export default Disablebtn