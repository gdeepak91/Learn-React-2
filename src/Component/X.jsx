import React from 'react'
import Title from './Title'
import Img from '../Image/img.jfif';
import Img2 from '../Image/img2.jfif';
// import Img3 from '../img3.jfif';
import Img4 from '../Image/img4.jfif';

const X = () => {
  return (
    <>
      <Title title="Country Card"/>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card shadow-lg">
              <img src={Img} alt="img1" />
            </div>
            <div className="card-body">
              <h3>Paris</h3>
              <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla repellat voluptate animi velit fuga, ab voluptas enim provident rerum est assumenda voluptatum nisi hic vero laboriosam culpa necessitatibus corrupti consequuntur!</p>
              <button className="btn btn-dark btn-sm">Read More..</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-lg">
              <img src={Img2} alt="img1" />
            </div>
            <div className="card-body">
              <h3>Paris</h3>
              <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla repellat voluptate animi velit fuga, ab voluptas enim provident rerum est assumenda voluptatum nisi hic vero laboriosam culpa necessitatibus corrupti consequuntur!</p>
              <button className="btn btn-dark btn-sm">Read More..</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-lg">
              <img src={Img} alt="img1" />
            </div>
            <div className="card-body">
              <h3>Paris</h3>
              <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla repellat voluptate animi velit fuga, ab voluptas enim provident rerum est assumenda voluptatum nisi hic vero laboriosam culpa necessitatibus corrupti consequuntur!</p>
              <button className="btn btn-dark btn-sm">Read More..</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow-lg">
              <img src={Img4} alt="img1" />
            </div>
            <div className="card-body">
              <h3>Paris</h3>
              <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla repellat voluptate animi velit fuga, ab voluptas enim provident rerum est assumenda voluptatum nisi hic vero laboriosam culpa necessitatibus corrupti consequuntur!</p>
              <button className="btn btn-dark btn-sm">Read More..</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default X