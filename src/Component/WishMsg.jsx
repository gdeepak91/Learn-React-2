import React from 'react'
import Title from './Title'

const WishMsg = () => {
  const [good , setGood] = React.useState('Good Morning')
  const goodm = () => {
    setGood('Good Morning')
  }
  const gooda = () => {
    setGood('Good Afternoon')
  }
  const goode = () => {
    setGood('Good Evening')
  }
  const goodn = () => {
    setGood('Good Night')
  }
  return (
    <>
      <Title title="Wish Message"/>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <p className="h4">Wish MSG</p>
              </div>
              <div className="card-body">
                <h2>{good}</h2>
                <br />
                <button onClick={goodm} className='btn btn-success m-1'>Good Morning</button>
                <button onClick={gooda} className='btn btn-primary m-1'>Good Afternoon</button>
                <button onClick={goode} className='btn btn-secondary m-1'>Good Evening</button>
                <button onClick={goodn} className='btn btn-danger m-1'>Good Night</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default WishMsg