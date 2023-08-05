import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className='container-fluid footer-container mt-5'>
      <div className='row'>

      </div>
        <div className='row footer-firstrow mt-5 '>
            <div className='col-lg-4 empty-firstcol'>

            </div>
            <div className='col-lg-4 empty-secondcol mt-2'>
            <i class="fa-brands fa-instagram instagram"></i>
            <i class="fa-brands fa-facebook-f facebook"></i>
            <i class="fa-brands fa-twitter twiter"></i>

            </div>
            <div className='col-lg-4 empty-thirdcol'>

            </div>

        </div>

        <div className='row footer-secondrow'>
        <div className='col-lg-4 nonempty-firstcol'>

        </div>
        
        <div className='col-lg-4 nonempty-secondcol'>
          <p className='copyright mt-5 text-center'>© 2023 Plant Shop. Powered by Plant Shop.</p>
         </div>
          <div className='col-lg-4 nonempty-thirdcol'>

          </div>

        </div>

    </div>
      
    </>
  )
}

export default Footer
