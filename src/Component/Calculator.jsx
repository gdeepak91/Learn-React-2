import React from 'react'
import Title from './Title'
import '../Calculator.css'

const Calculator = () => {

  const handleClick = () => {
    console.log("hi");
  }

  return (
    <>
      <Title title="Calculator"/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card bg-dark text-light text-center">
              <div className="card-body">
                {/* <h2 className='text-center'>Calculator</h2> */}
                <input type="text" /><br />
                <input type="text" />
                <br />
                <br />
                <input type="button" value="C" className='button clear' onClick={handleClick}/>
                <input type="button" value="DEL" className='button clear' onClick={handleClick} />
                <input type="button" value="%" className='button operator' onClick={handleClick} />
                <input type="button" value="/" className='button operator' onClick={handleClick}/>
                <br />
                <input type="button" value="7" className='button' onClick={handleClick}/>
                <input type="button" value="8" className='button' onClick={handleClick}/>
                <input type="button" value="9" className='button' onClick={handleClick}/>
                <input type="button" value="*" className='button operator' onClick={handleClick}/>

                <br />
                <input type="button" value="4" className='button' onClick={handleClick}/>
                <input type="button" value="5" className='button' onClick={handleClick}/>
                <input type="button" value="6" className='button' onClick={handleClick}/>
                <input type="button" value="-" className='button operator' onClick={handleClick}/>

                <br />
                <input type="button" value="1" className='button' onClick={handleClick}/>
                <input type="button" value="2" className='button' onClick={handleClick}/>
                <input type="button" value="3" className='button' onClick={handleClick}/>
                <input type="button" value="+" className='button operator' onClick={handleClick}/>

                <br />
                <input type="button" value="0" className='button' onClick={handleClick}/>
                <input type="button" value="." className='button operator' onClick={handleClick}/>
                <input type="button" value="=" className='button operator' onClick={handleClick}/>
                <input type="button" value="AC" className='button operator' onClick={handleClick} />

                <br />
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Calculator