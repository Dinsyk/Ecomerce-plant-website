import React from 'react'
import './Login.css'
import Nav from '../../components/Nav/Nav'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'



function Login() {

    const [data,setData]=useState({})
    const navigate=useNavigate()


    const change=(e)=>{
        const{name,value}=e.target
        setData({...data,[name]:value})
    }
    // console.log(data);

    const onclickLogin=(e)=>{
        e.preventDefault();
        console.log(data);
        axios.post('http://localhost:4000/login/login',data).then((response)=>{
            navigate('/')
    
            localStorage.setItem('token',response.data.token)//here token is set in to localstorage
             console.log(response.data.token);//here we can see encripted token(here username and loginid) in console
        }).catch((err)=>{
            console.log(err);
        })

    }
  return (
    <>
    <Nav/>
    <div className='container login-container'>
        <div className='login-box'>
            <form action="">
                <div className='login-inputs'>
                <div className='form-group'>
                    <label htmlFor="">Username</label>
                    <input type="text" className='form-control username-box 'name='username' id='uname' onChange={change} />

                </div>

                <div className='form-group'>
                    <label htmlFor="">Password</label>
                    <input type="text" className='form-control password-box 'name='password' id='pword' onChange={change} />

                </div>

                <div className='form-group button-group'>
                    <input type="button" className='btn btn-success login button mt-2' value='Login' onClick={onclickLogin}/>

                </div>

                </div>

                <div className='goto-div'>
                    <a className='goto' href="/"><i class="fa-sharp fa-solid fa-arrow-right"></i>Go to plant shop</a>

                </div>

                
           
            </form>
           

        </div>
       
        
       

        
       

    </div>
    <Footer/>
      
    </>
  )
}

export default Login
