import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Plants from './Pages/Plants/Plants';
import Addplants from './Pages/Addplants/Addplants';
import Viewindividualplant from './Pages/Viewindividualplant/Viewindividualplant';
import About from './Pages/About/About';
import Newplants from './components/Newplants/Newplants';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/profile/Profile';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/plant' element={<Plants/>}></Route>
      <Route path='/addplant' element={<Addplants/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/newplant' element={<Newplants/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/viewindividualplant/:individualplant_id' element={<Viewindividualplant/>}></Route>
    


    </Routes>
      
    </>
  );
}

export default App;
