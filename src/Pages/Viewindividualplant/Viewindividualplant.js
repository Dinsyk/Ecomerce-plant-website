import React from 'react'
import './Viewindividualplant.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'


function Viewindividualplant() {
    const[viewindividualplant,setViewindividualplant]=useState({})

    const {individualplant_id} = useParams()
    console.log(individualplant_id);

    useEffect(()=>{
        axios.get(`http://localhost:4000/addplant/viewindividualplant/${individualplant_id}`).then((individualplantresponse)=>{
            // console.log(individualplantresponse);
            setViewindividualplant(individualplantresponse.data.individualplantview)
        })

    })
  return (
    <>
    <Nav/>
     <div className='container-fluid individualplant-container'>
        <div className='row individualplant-firstrow'>
        <div className='col-lg-2'>

        </div>
        <div className='col-lg-8 individualplant-col'>
            <div className='row individualplantcol-firstrow'>
                <div className='col-lg-6 individualplant-imgcol '>
                    <div className='card'>
                    <img className='image-fluid' src={`/imageuploads/${viewindividualplant.image}`}  alt="" />
                    </div>
                  

                </div>
                <div className='col-lg-6 individualplant-nonimgcol'>
                    <div className='card mt-5'>
                        <div className='card-body'>
                        <h2 className='individualplant-head  ms-4'>{viewindividualplant.plantname}</h2>
                    <h4 className='individualplant-price ms-4'>{viewindividualplant.plantprice}</h4>
                    <p className='individualplant-description ms-4'>{viewindividualplant.plantdescription}</p>
                        </div>
            
                    </div>

                 


                </div>

            </div>


        </div>
        <div className='col-lg-2'>

         </div>

        </div>
       
       
      
        
     </div>

      <Footer/>
    </>
  )
}

export default Viewindividualplant
