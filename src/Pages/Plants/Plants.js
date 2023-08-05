import React, { useEffect, useState } from 'react'
import './Plants.css'
import Nav from '../../components/Nav/Nav'
import axios from 'axios'
import Footer from '../../components/Footer/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Plants() {
const[plants,setPlants]=useState([]) //this isthe state in which plants are added when admin is adding plants
console.log(plants);

useEffect(()=>{
  axios.get('http://localhost:4000/addplant/viewplant').then((data)=>{
    // console.log(data);
    setPlants(data.data.data)

  })
},[])

const token = localStorage.getItem("token");//here we get the encripted token from localstorage
// console.log(token);


const addtocart=(id)=>{
  console.log(id);
  const product={productid:id} //here the id(the id of the perticular product which we want to add in cart )is defined in another variable product.this is because in backend this id is coniderd as an object.so it is declared as a key value pair.
  console.log(product);
  axios.post(`http://localhost:4000/cart/addcart/`,product,{
    headers: {
      Authorization: `bearer ${token}`,
    },
  }).then((message)=>{
    console.log(message);
  }).catch((err)=>{
    // console.log(err.response.data.message);
    toast.success(err.response.data.message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  })
  
  
}

const category=(data)=>{
  const filter=plants.filter((values)=>{
    return values.plantcategory==data
  })
  setPlants(filter)
}



  return (
    <>
    <Nav/>
    <div className='container-fluid plant-container'>
      <div className='container mainplant-container mt-5'>
        <div className='row mainplant-containerone mt-5'>
          <div className='col-lg-12 sortcol'>
               {/* Example single danger button  */}
          <div class="btn-group">
  <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Sort
  </button>
  <ul class="dropdown-menu">
    <li><a onClick={()=>{category('Tree Type')}} class="dropdown-item" href="#">TreeType</a></li>
    <li><a onClick={()=>{category('Office Type')}} class="dropdown-item" href="#">Office Type</a></li>
    <li><a onClick={()=>{category('Hanging Type')}} class="dropdown-item" href="#">Hanging basket plants</a></li>
    <li><a onClick={()=>{category('Cactus Type')}} class="dropdown-item" href="#">Cactus Type</a></li>
  </ul>
</div>
{/* dropdown end */}
          </div>

        </div>


        <div className='row mainplant-containertwo'>
          {
            plants.map((i)=>
          <div className='col-lg-4 '>
          <div className="card plants-firstcard">
           
             <a href={`/viewindividualplant/${i._id}`}>  <img src={`/assets/${i.image}`} class="card-img-top" alt="..."/></a>
               <div class="card-body">
                <div className='row cardbody-firstrow'>
                <p className='plant-name'>{i.plantname}</p>
                <p className='plant-description'>{i.plantdescription}</p>
                <p className='plant-category'>{i.plantcategory}</p>
                <p className='plant-price'>{i.plantprice}</p>
                </div>
                {/* <div className='row cardbody-secondrow'> */}
                {/* <button className='cart-button' onClick={()=>addtocart(i._id)} > <i class="fa-solid fa-cart-shopping cart-icon "></i></button> */}
                <button className='cart-button' onClick={()=>addtocart(i._id)} > <i class="fa-solid fa-cart-shopping cart-icon "></i></button>
                {/* </div> */}
              
               
               </div>



            </div>

          </div>)
          }
        <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>

        </div>
    


      </div>

    </div>
    <Footer/>
      
    </>
  )
}

export default Plants
