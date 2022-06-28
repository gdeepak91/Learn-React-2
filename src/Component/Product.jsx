import React , {useState} from 'react'
import Title from './Title';

const Product = () => {
  const [qty , setQty] = useState(1);
  const [state , setState] = useState({
    product:{
              sno : 'AA001',
              image : 'https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_UL480_FMwebp_QL65_.jpg',
              name : "Deepak",
              price:200,
              qty : 2
            }
          });
  
  // console.log(state.product.name);

  
  const IncItem = () => {
    setQty(qty+1);
  }
  const DecItem = () => {
    setQty(qty-1>1?qty-1:1);
  }
  return (
    <>
      <Title title="Product Item"/>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className='h2 mb-3 text-success'>Product Item</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, voluptate a soluta obcaecati, ea enim deserunt numquam corrupti officiis harum animi delectus? Harum neque, debitis amet sequi repellendus perspiciatis autem.</p>
            <table className='table table-bordered table-hover text-center'>
              <thead className='bg-dark text-light p-2'>
                <tr>
                  <th>SNO.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{state.product.sno}</td>
                  <td><img src={state.product.image} alt="img" style={{width:'3rem',height:'3rem'}}/></td>
                  <td>{state.product.name}</td>
                  <td>{state.product.price}</td>
                  <td><button onClick={DecItem} className='btn btn-success btn-sm mx-3'>-</button>{qty}<button onClick={IncItem} className='btn btn-success btn-sm mx-3'>+</button></td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product