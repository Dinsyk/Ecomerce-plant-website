import React from 'react'
import './Newplants.css'

function Newplants() {
  return (
    <>
    <div className='container-fluid newplants-container'>
        <div className='row newplants-firstrow'>
            <div className='col-lg-6 new-col'>
                <h2 className='newplants-head mt-3 ms-3'>New Plants</h2>

            </div>
            <div className='col-lg-6'>
               
                <a href="/plant"> <button className='btn viewall-button mt-3 ms-3'>View All</button></a>

            </div>

        </div>

        <div className='row newplants-secondrow'>
            <div className='col-lg-4'>
            <div className="card newplants-firstcard">
             <img src="/assets/birdnest japanese.jpg" class="card-img-top" alt="..."/>
               <div class="card-body">
                <p className='plant-name'>Birdnest Japanese</p>
                <p className='plant-description'>Air Purifyng</p>
                <p className='plant-price'>$84.90</p>
               </div>
            </div>

            </div>
            <div className='col-lg-4'>
            <div className="card newplants-firstcard">
             <img src="/assets/hoya obovatum.jpg" class="card-img-top" alt="..."/>
               <div class="card-body">
                <p className='plant-name'>Hoya Obovatum</p>
                <p className='plant-description'>indor plants</p>
                <p className='plant-price'>$64.00</p>
               </div>
            </div>

            </div>
            <div className='col-lg-4'>
            <div className="card newplants-firstcard">
             <img src="/assets/monstera-deliciosa.jpg" class="card-img-top" alt="..."/>
               <div class="card-body">
                <p className='plant-name'>Monstera Deliciosa</p>
                <p className='plant-description'>Air Purifying</p>
                <p className='plant-price'>$104.65</p>
               </div>
            </div>

            </div>

        </div>


        <div className='row newplants-thirdrow mt-3'>
            <div className='col-lg-4'>
            <div className="card newplants-firstcard">
             <img src="/assets/zz plant.webp" class="card-img-top" alt="..."/>
               <div class="card-body">
                <p className='plant-name'>Zz Plant</p>
                <p className='plant-description'>Herb Seed</p>
                <p className='plant-price'>$234.90</p>
               </div>
            </div>

            </div>
            <div className='col-lg-4'>
            <div className="card newplants-firstcard">
             <img src="/assets/bird-of-paradise.jpg" class="card-img-top" alt="..."/>
               <div class="card-body">
                <p className='plant-name'>Bird Of Paradise</p>
                <p className='plant-description'>Ceramic Pots</p>
                <p className='plant-price'>$164.00</p>
               </div>
            </div>

            </div>
            <div className='col-lg-4'>
            <div className="card newplants-firstcard">
             <img src="/assets/calathea-beauty-star.jpg" class="card-img-top" alt="..."/>
               <div class="card-body">
                <p className='plant-name'>Calathea Beauty Star</p>
                <p className='plant-description'>Herbs Seeds</p>
                <p className='plant-price'>$104.65</p>
               </div>
            </div>

            </div>

        </div>

    </div>
      
    </>
  )
}

export default Newplants
