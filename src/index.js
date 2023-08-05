import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greenstore from './components/Greenstore/Greenstore';
import Login from './Pages/Login/Login';
import Story from './components/Story/Story';
import Newplants from './components/Newplants/Newplants';
import Customer from './components/Customer/Customer';
import Pecularity from './components/Pecularity/Pecularity';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App/> */}
    {/* <Greenstore/> */}
    {/* <Login/> */}
    {/* <Story/> */}
    {/* <Newplants/> */}
    {/* <Customer/> */}
    {/* <Pecularity/> */}
    {/* <Footer/> */}
    {/* <Home/> */}
    {/* <Register/> */}
  
    {/* <Nav/> */}
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
