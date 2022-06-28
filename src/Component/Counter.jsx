import React , {useState} from 'react'
import Title from './Title'


const Counter = () => {
  const [state , setState] = useState(0);

  const incNum = () => {
    setState(state+1);
  }

  const decNum = () => {
    setState(state-1 > 0 ? state -1:0)
  }
  return (
    <>
      <Title title="Counter"/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header">
                <h2>Counter</h2>
              </div>
              <div className="card-body">
                <h1>{state}</h1>
                <br />
                <button className='btn btn-success' onClick={incNum}>Increment</button>  <button className='btn btn-danger' onClick={decNum}>Decrement</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Counter