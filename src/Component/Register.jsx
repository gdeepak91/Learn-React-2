import React from 'react'
import Title from './Title';

const Register = () => {
  return (
    <>
      <Title title="Register Form"/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-header bg-warning text-light ">
                <p className="h4">Register Here</p>
              </div>
              <div className="card-body">
                <form>
                  <div className='mb-3'>
                    <input type="text" name='username' placeholder='Username' className='form-control'/>
                  </div>
                  <div className='mb-3'>
                    <input type="text" name='email' placeholder='E-mail' className='form-control'/>
                  </div>
                  <div className='mb-3'>
                    <input type="text" name="password" placeholder='Password' className='form-control'/>
                  </div>
                  <div className='mb-3'>
                    <select name='designation' className='form-control'>
                      <option value="">Select Designation</option>
                      <option value="CS">CS</option>
                    </select>
                  </div>
                  <div className='mb-3'>
                    <textarea name='bio' className='form-control' placeholder='Bio'></textarea>
                  </div>
                  <div className='mb-3'>
                    <input type="checkbox" name='check'/> Accept Term
                  </div>
                  <div className='mb-3'>
                    <input type="submit" className='btn btn-warning' value="Register" />
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

export default Register