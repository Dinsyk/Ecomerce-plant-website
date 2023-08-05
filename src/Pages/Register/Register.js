import React, { useState } from 'react'
import './Register.css'
import Nav from '../../components/Nav/Nav'
import axios from 'axios'
import Footer from '../../components/Footer/Footer'

function Register() {
    const[data,setData]=useState({})
    const change=(e)=>{
        const{name,value}=e.target
        setData({...data,[name]:value})
        // console.log(data);
    }
    const onclickRegister=(e)=>{
        e.preventDefault();
        console.log(data);
        axios.post('http://localhost:4000/register/register',data).then((response)=>{
            console.log(response);
        
        }).catch((err)=>{
            console.log(err);
        })
    }






  return (
    <>
    <Nav/>
    <div className='container-fluid register-container'>
        <div className='row register-firstrow'>
            <div className='col-lg-6 getin-col'>
                <h1 className='getin-head ms-5 mt-3'>Get In Touch</h1>
                <p className='getin-para ms-5'>Lorem ipsum dolor sit amet, consectetur adip, libero architecto dolorem earum cumque! Repudiandae possimus fugit libero iusto aut.</p>
                <div className='visit-div'>
                <i class="fa-solid fa-location-dot location ms-5"></i>
                <p className='visit-para'>VISIT US</p>

                </div>
                <p className='visit-address ms-5'>123 Demo St, San Francisco, CA 45678, United States</p>
                <div className='call-div'>
                <i class="fa-solid fa-phone-flip phone ms-5"></i>
                <p className='call-para'>CALL US</p>

                </div>
                <p className='phonenumber ms-5'>+1 123-456-7890</p>
                <div className='email-div'>
                <i class="fa-solid fa-envelope email ms-5"></i>
                <p className='email-para'>EMAIL US</p>

                </div>
                <p className='emailid ms-5'>mail@example.com</p>
                 <hr />
                 <p className='follow-para ms-5'>FOLLOW US</p>
                 <div className='followicon-div'>
                 <i class="fa-brands fa-instagram insta ms-5"></i>
                 <i class="fa-brands fa-facebook-f insta ms-2"></i>
                 <i class="fa-brands fa-youtube insta ms-2"></i>

                 </div>


            </div>
            <div className='col-lg-6 registration-col'>
                <h3 className='register-head mt-3'>REGISTER NOW</h3>
                <form action="">
                <div className='login-inputs'>
                <div className='form-group'>
                    <label htmlFor="">Name</label>
                    <input type="text" className='form-control username-box 'name='name' id='name' onChange={change} />

                </div>

                <div className='form-group'>
                    <label htmlFor="">Phonenumber</label>
                    <input type="text" className='form-control password-box 'name='phone' id='phone' onChange={change} />

                </div>
                <div className='form-group'>
                    <label htmlFor="">Address</label>
                    <input type='text' className='form-control password-box 'name='address' id='address' onChange={change} />

                </div>
                {/* <div className='form-group'>
                    <label htmlFor="">Photo</label>
                    <input type='file' className='form-control password-box 'name='photo' id='photo' />

                </div> */}
                <div className='form-group'>
                    <label htmlFor="">Username</label>
                    <input type='text' className='form-control password-box 'name='username' id='uname' onChange={change} />

                </div>
                <div className='form-group'>
                    <label htmlFor="">Password</label>
                    <input type='text' className='form-control password-box 'name='password' id='pword' onChange={change} />

                </div>

                <div className='form-group button-group'>
                    <input type="button" className='btn btn-success register button mt-2' value='Register' onClick={onclickRegister}/>

                </div>

                </div>

               

                
           
            </form>

            </div>

        </div>

    </div>

    <Footer/>
      
    </>
  )
}

export default Register