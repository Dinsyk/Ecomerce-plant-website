import React from 'react'
import './Pecularity.css'

function Pecularity() {
  return (
    <>
    <div className='container-fluid pecularity-container'>
        <div className='row pecularity-row mt-5'>
            <div className='col-lg-4 pecularity-firstcol'>
            <i class="fa-solid fa-lock key"></i>
            <h4 className='secure-head ms-1'>SECURE PAYMENT</h4>

            </div>

            <div className='col-lg-4 pecularity-secondcol'>
            <i class="fa-solid fa-truck truck"></i>
            <h4 className='secure-head ms-1'>DELIVERD WITH CARE</h4>

            </div>

            <div className='col-lg-4 pecularity-thirdcol'>
            <i class="fa-solid fa-hand-holding-heart heart"></i>
            <h4 className='secure-head ms-1'>EXCELLENT SERVICE</h4>

            </div>

        </div>

    </div>
      
    </>
  )
}

export default Pecularity
