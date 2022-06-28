import React from 'react'
import Title from './Title';

const Bell = () => {
  const [a , setA] = React.useState(true);
  return (
    <>
      <Title title="Bell Ring"/>
      <i onClick={()=>{setA(!a)}} className={a?'fa fa-bell':'fa fa-bell-slash'}></i>
      
    </>
  )
}

export default Bell