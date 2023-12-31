import React from 'react'
import './Greenstore.css'

function Greenstore() {
  return (
    <>
    <div className='container-fluid greenstore-container'>
      <div className='row nav-row'>
      <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand greenstore-head ms-5" href="#">Greenstore</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav  ">
      <li class="nav-item">
          <a class="nav-link home-head" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link home-head" href="/addplant">Addplants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link home-head" href="/plant">Plants</a>
        </li>
        <li class="nav-item">
          <a class="nav-link home-head" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link home-head" href="/profile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link home-head" href="/register">Register</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-sharp fa-solid fa-cart-shopping carticon mt-2"></i></a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/cart">View Cart</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item ">
        <a class="nav-link home-head" href="/login"><i class="fa-solid fa-user user-head"></i></a>
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
      <div className='container welcome-container '>
        <div className='welcometo'>
        <p>WELCOME TO THE GREENSTORE</p>
        </div>
        <div className='letsbring'>
        <h1>Let's Bring The Spring To Your Home</h1>
        </div>
        <div className='shopnow'>
          
          <a href="/newplant"><button className='btn shopnow-button'>shop now</button></a>

        </div>
       
       

      </div>

    </div>
      
    </>
  )
}

export default Greenstore
