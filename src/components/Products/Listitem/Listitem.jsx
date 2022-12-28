import React from 'react'
import { useState } from 'react';
import './Listitem.css';
import Modal from '../../Modal';

const Listitem = ({ data }) => {
 
  
  const [count, setCount] = useState(0);

  function handleplus(e) {
    
    setCount(count + 1);
  }

  function handleminus() {
    if (count < 1) {
      setCount(0);
    }
    else {
      setCount(count - 1);
    }
  }
  return (
    <>
      {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}
      

      <div className='cards' >
        <h1></h1>
        <img src={`/assets/${data.thumbnail}`} alt="" />
        <div>
          <div className='card-info'>
            <div style={{ color: 'white' }}><span>Our Price:</span> <span>{data.discountedPrice}</span></div>
            <div><span>MRP:</span><span><strike>{data.price}</strike></span></div>
            <div>
            </div>
            <h5 className='title' align="center">{data.title}</h5>
          </div>
        </div>
        {
          count < 1 ?
            <button className='btn' onClick={handleplus}  value={data.id} data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span>add to cart</span>
             
            </button>
            :
            <div className='count'>
              <button onClick={handleminus}><b>-</b></button>
              <span>{count}</span>
              <button onClick={handleplus}><b>+</b></button>
              
            </div>
            
        }

      </div>
   
      <Modal data={data} id={0}/>

    </>
  )
}

export default Listitem;