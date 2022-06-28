import React , {useState} from 'react'
import Title from './Title'

const Timer = () => {
  const [timer , setTimer] = useState(0);
  let start = () => {
    setInterval(() => { setTimer(timer=>timer+1) }, 1000);
  }
  let stopp = () => {
    setInterval(() => { setTimer(start) },0)
  }
  let clear = () => {
    setInterval(() => { setTimer(start) }, 1000)
  }
  return (
    <>
      <Title title="Timer"/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-danger text-light">
                <p className='h4'>Timer</p>
              </div>
              <div className="card-body">
                <h4>{timer}</h4>
                <br />
                <button onClick={start} className='btn btn-success m-2'>Start</button> 
                <button onClick={stopp} className='btn btn-danger m-2'>Stop</button>
                <button onClick={clear} className='btn btn-warning m-2'>Clear</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Timer