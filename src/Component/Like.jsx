import React from 'react'
// import {} from 'font-awesome'
import Title from './Title'

const Like = () => {
  return (
    <div>
      <Title title="Like & Dislike"/>
      <div>
        <i className='fa fa-thumbs-up'></i>
        <i className='fa fa-thumbs-down'></i>
        <i className='fa fa-share'></i>
        <i className='fa fa-save'></i>
      </div>
    </div>
  )
}

export default Like