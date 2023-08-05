import React from 'react'
import './Nav.css'
import { useState } from 'react';
import {useEffect } from 'react';
import axios from 'axios';

function Nav() {
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
console.log(carts.length);
  return (
    <>
    <div className='container-fluid nav-container'>
    <div className='row nav-row'>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a className="navbar-brand logo  ms-5" href="#">Greenstore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav  ">
      <li class="nav-item">
          <a class="nav-link " href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/addplant">Addplants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/plant">Plants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/profile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/register">Register</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i  class="fa-sharp fa-solid fa-cart-shopping cart-icon mt-2"></i>{carts.length}</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/cart">View Cart</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item ">
        <a class="nav-link " href="/login"><i class="fa-solid fa-user user-head"></i></a>
        </li>
      </ul>
      {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

      </div>

    </div>
      
    </>
  )
}

export default Nav
