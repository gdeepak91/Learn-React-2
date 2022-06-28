import React, { useState } from 'react'
import Title from './Title';
import Img from '../Image/img.jfif'

const Shoping_Card = () => {
  const [a, setA] = useState(1);

  const IncQty = () => {
    setA(a + 1);
  }
  const DecQty = () => {
    setA(a - 1);
  }
  const abc = [
    {
      sno: 1,
      image: 'https://m.media-amazon.com/images/I/61dtaNitVTL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Deepak',
      price: 100,
      qty: 1
    },
    {
      sno: 2,
      image: 'https://m.media-amazon.com/images/I/71iiXU7HHkL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Vinay',
      price: 500,
      qty: 1
    },
    {
      sno: 3,
      image: 'https://m.media-amazon.com/images/I/71Ff0Ap49HS._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Vikash',
      price: 1900,
      qty: 1
    },
    {
      sno: 4,
      image: 'https://m.media-amazon.com/images/I/81vXk327hOL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Suresh',
      price: 800,
      qty: 1
    }
  ];
  // console.log(abc.map(a => { return <li>{a.sno}{a.name}{a.price}{a.image}</li>}));

  return (
    <>
      <Title title="Shoping Card" />
      <div className="container">
        <div className="row">
          <div className="col">
            <p className='h2 mb-3 text-primary'>Multiple Select Product Items Here</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tempora nesciunt qui aliquam pariatur rerum, atque dolores earum aperiam voluptas nobis incidunt fugiat reiciendis molestiae labore ab, aspernatur, praesentium maxime. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis eveniet nemo nobis quia amet commodi et a autem aliquam rem quibusdam mollitia quis, explicabo non aliquid, qui libero velit officia? </p>
            <table className='table table-hover table-bordered text-center'>
              <thead className='bg-dark text-light'>
                <tr>
                  <th>SNO</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {abc.map(a => {
                  return (
                    <tr key={a.sno}>
                      <td>{a.sno}</td>
                      <td><img src={a.image} alt="img" style={{ width: '3rem', height: '3rem' }} /></td>
                      <td>{a.name}</td>
                      <td>{a.price}</td>
                      <td><button onClick={DecQty} className='btn btn-success mx-3 btn-sm'>-</button>1 <button onClick={IncQty} className='btn btn-success mx-3 btn-sm'>+</button></td>
                      <td>1</td>
                    </tr>
                  )
                })}
                <tr>
                  <td colSpan="5" style={{ color: "red" }}><h4>Grand Total</h4></td>
                  <td><h4>40</h4></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Shoping_Card