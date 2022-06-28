import React from 'react'
import Title from './Title'

const Subscribe = () => {
  const [sub , setSub] = React.useState(true);

  return (
    <div>Subscribe
      <Title title="Subscribe"/>
      <button className='btn btn-danger' onClick={() => { setSub(!sub)}}>{sub?"SUBSCRIBE":"SUBSCRIBED "}</button>

    </div>
  )
}

export default Subscribe