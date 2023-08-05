import React from 'react'
import './Cart.css'
import Nav from '../../components/Nav/Nav'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'



function Cart() {
const[carts,setCarts]=useState([])
const token = localStorage.getItem("token");

useEffect(()=>{
axios.get('http://localhost:4000/cart/viewcarts',{
    headers: {
        Authorization: `bearer ${token}`,
      },
}).then((cartdetails)=>{
    console.log(cartdetails);
    console.log(cartdetails.data);
    
    setCarts(cartdetails.data)
})
},[])
console.log(carts);



const incrementCount = (id)=>{
    axios.post(`http://localhost:4000/cart/incrementcount/${id}`).then(()=>{
        window.location.reload()//this is for state updation via page reload.before giving this data is updated(that is count is incremented to the database only).and this new count is updated to a state(here Cart).
        //so every page reloading only we can see the data.so we give this function.
    })

    

}

const decrementCount=(id)=>{
    axios.post(`http://localhost:4000/cart/decrementcount/${id}`).then(()=>{
        window.location.reload()
    })
}





  return (
    <>
    <Nav/>
    <div className='container-fluid cart-container'>
        <div className='row cart-firstrow'>

        </div>
        <div className='row'>

        </div>
        <div className='row cart-secondrow '>
            <div className='col-lg-2'>

            </div>
            <div className='col-lg-8 cartbox-container'>
                <h3 className='cart-head mt-5'>Cart</h3>

                <div className='cart-box mt-3'>
                    
                
                    
                    <div className=' row cartbox-firstrow mt-3 '>
                        
                        <div className='col-lg-2'>
                            <h5 className='headings'>Product Image</h5>
                            
                            
                            
                        

                        </div>
                         <div className='col-lg-2'>
                         <h5 className='headings'>Product Name</h5>
                        
                        </div>
                        <div className='col-lg-2'>
                        <h5 className='headings ms-3'>Product Price</h5>
                      
                        </div>
                        <div className='col-lg-2'>
                        <h5 className='headings ms-3'>Quantity</h5>
                        </div>
                        <div className='col-lg-2'>
                        <h5 className='headings ms-3'>Subtotal</h5>
                        </div>


                    </div>
                     {
                        carts.map((i)=>
                    <div className=' row cartbox-secondrow'>
                        <div className='col-lg-2'>
                        <img className='image-fluid cart-plantimage' src={`/imageuploads/${i.plantimage}`} alt="" />

                        </div>
                        <div className='col-lg-2'>
                        <p>{i.plantname}</p>

                        </div>
                        <div className='col-lg-2'>
                        <p>{i.plantprice}</p>
                        </div>
                        <div className='col-lg-2 button-container'>
                            <button className='btn minus-button' onClick={()=>decrementCount(i._id)}><i class="fa-regular fa-square-minus"></i></button>
                        <p className='count mt-4'>{i.count}</p>
                        <button onClick={()=>incrementCount(i._id)} className='btn plus-button'><i class="fa-regular fa-square-plus"></i></button>
                        

                        </div>

                    </div>
                        )
}
                   
                    
                    
                    

                </div>

            </div>
          
            
            

        </div>
      
      

    </div>
      
    </>
  )
}

export default Cart