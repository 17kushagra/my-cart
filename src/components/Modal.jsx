import React from 'react'

const modal = ({ data ,id }) => {
    
  return (
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">

        
              <h2 style={{ textAlign: 'center' }}>item details</h2>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

              <div className="modal-cont">
                <div>
                  <img src={`/assets/${data.thumbnail}`} width="200px" alt="" />
                  <div className='card-info'>
                    {/* <h1>{data.id}</h1> */}
                    <div style={{ color: 'black' }}><span>Our Price:</span> <span>{data.discountedPrice}</span></div>
                    <div><span>MRP:</span><span><strike>{data.price}</strike></span></div>

                    <div>
                    </div>
                    <h5 className='title' align="center">{data.title}</h5>
                  </div>
                </div>
                <div>
                  <h1>{data.title}</h1>
                  <div style={{ color: "black", textAlign: 'left', padding: '20px' }}>{data.
                    description}</div>

                </div>
              </div>
            </div>
            
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default modal;