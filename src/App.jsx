// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import AddCar from './pages/AddCar';
import Login from './pages/Login';
import Viewuser from './pages/userdetils'
import './App.css'
import './styles/nav.css'
import AdminLogin from './pages/AdminLogin';
import Singin from './pages/Singin';
import AdminNav from './pages/AdminNav';
import Showcars from './pages/Showcars';
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/Singin" element={<Singin />}/>
        <Route path='/Login' element={<Login/>} />
           <Route path='/AdminLogin' element={<AdminLogin/>}/>
        <Route path='/Viewuser' element={<Viewuser/>}/>
        <Route path='/showcars' element={<Showcars/>}/>
      </Routes>

      
      
      
    </>
  );
}

export default App;
