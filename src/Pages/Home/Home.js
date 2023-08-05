import React from 'react'
import './Home.css'
import Greenstore from '../../components/Greenstore/Greenstore'
import Newplants from '../../components/Newplants/Newplants'
import Story from '../../components/Story/Story'
import Customer from '../../components/Customer/Customer'
import Pecularity from '../../components/Pecularity/Pecularity'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
    <Greenstore/>
    <Newplants/>
    <Story/>
    <Customer/>
    <Pecularity/>
    <Footer/>
      
    </>
  )
}

export default Home
