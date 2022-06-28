import React from 'react'
import Title from './Title';

const Login = () => {
  return (
    <>
      <Title title="Form Handling Form"/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header text-light bg-success">
                <p className='h4'>Login Here</p>
              </div>
              <div className="card-body">
                <form>
                  <div className='mb-3'>
                    <input type="text" name="username" placeholder='Username' className='form-control' />
                  </div>
                  <div className='mb-3'>
                    <input type="text" name="password" placeholder='Password' className='form-control' />
                  </div>
                  <div className='mb-3'>
                    <input type="submit" value="Login" className='btn btn-success'/>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-3">
            <div className="card">
              <div className="card-header text-light bg-primary">
                <p className='h4'>User Name</p>
              </div>
              <div className="card-body">
                <form>
                  <div className='mb-3'>
                    <input type="text" name="username" placeholder='Username' className='form-control' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Login