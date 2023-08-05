import React from 'react'
import './About.css'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'

function About() {
  return (
    <>
    
    <Nav/>
    
   
    <hr />
    <div className='container-fluid about-container'>
        <div className='row about-firstrow'>
            <div className='col-lg-2'>

            </div>
            <div className='col-lg-2 about-headdiv'>
                <h1 className='about-head mt-5'>About</h1>

            </div>
            <div className='col-lg-6 about-descriptiondiv mt-5'>
                <div className='line mt-5'>

                </div>
                <h2 className='provide-head mt-5'>We Provide Fresh And Healthy Plants For Your Space</h2>
                <p className='provide-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur commodi voluptates error quae qui, eveniet quia architecto soluta natus ipsum. Similique nisi id provident dignissimos maxime temporibus amet natus.</p>

            </div>
            <div className='col-lg-2'>

            </div>

        </div>
        <div className='row about-secondrow'>
            <div className='col-lg-3'>
                <div className='card about-card1'>
                    <img className='image-fluid' src="/assets/about3.jpg" alt="" />

                </div>

            </div>
            <div className='col-lg-3'>
                <div className='card about-card2'>
                <img className='image-fluid' src="/assets/about2.jpg" alt="" />
                </div>
            

            </div>
            <div className='col-lg-3'>
            <div className='card about-card3'>
                <img className='image-fluid' src="/assets/about4.jpg" alt="" />
                </div>

            </div>
            <div className='col-lg-3'>
            <div className='card about-card4'>
                <img className='image-fluid' src="/assets/about5.jpg" alt="" />
                </div>

            </div>

        </div>

    </div>
    <Footer/>
      
    </>
  )
}

export default About
