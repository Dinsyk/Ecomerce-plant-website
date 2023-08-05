import React from 'react'
import './Customer.css'

function Customer() {
  return (
    <>
    <div className='container-fluid customer-container mt-5'>
        <div className='row customer-firstrow'>
            <div className='customerhead-div'>
            <h1>What Our Customers Say</h1>
            </div>
            
           

        </div>

        <div className='row customer-secondrow'>
            <div className='col-lg-4 firstcustomer-saycol'>
                <div className='firstcustomer-sayquote'>
                <i class="fa-solid fa-quote-left quote"></i>
                </div>
                <div className='firstcustomer-sayexplain'>
                <p className='customer-explain'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus qui exercitationem obcaecati, ipsum nesciunt cupiditate? Asperiores, delectus facere fugiat deleniti aut explicabo, accusantium, eligendi in inventore rerum fugit nostrum unde!</p>
                </div>
                <div className='firstcustomer-sayimage'>
                <img className='image-fluid firstcustomer-img' src="/assets/first customer.jpg" alt="" />
                </div>
                <div className='firstcustomer-sayname'>
                <p className='customer-name'>Jennifer Lewis</p>
                </div>
             </div>


             <div className='col-lg-4 firstcustomer-saycol'>
                <div className='firstcustomer-sayquote'>
                <i class="fa-solid fa-quote-left quote"></i>
                </div>
                <div className='firstcustomer-sayexplain'>
                <p className='customer-explain'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus qui exercitationem obcaecati, ipsum nesciunt cupiditate? Asperiores, delectus facere fugiat deleniti aut explicabo, accusantium, eligendi in inventore rerum fugit nostrum unde!</p>
                </div>
                <div className='firstcustomer-sayimage'>
                <img className='image-fluid firstcustomer-img' src="/assets/first customer.jpg" alt="" />
                </div>
                <div className='firstcustomer-sayname'>
                <p className='customer-name'>Alicia Heart</p>
                </div>
             </div>


             <div className='col-lg-4 firstcustomer-saycol'>
                <div className='firstcustomer-sayquote'>
                <i class="fa-solid fa-quote-left quote"></i>
                </div>
                <div className='firstcustomer-sayexplain'>
                <p className='customer-explain'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus qui exercitationem obcaecati, ipsum nesciunt cupiditate? Asperiores, delectus facere fugiat deleniti aut explicabo, accusantium, eligendi in inventore rerum fugit nostrum unde!</p>
                </div>
                <div className='firstcustomer-sayimage'>
                <img className='image-fluid firstcustomer-img' src="/assets/first customer.jpg" alt="" />
                </div>
                <div className='firstcustomer-sayname'>
                <p className='customer-name'>Maria Jhon</p>
                </div>
             </div>

        </div>

    </div>
      
    </>
  )
}

export default Customer
