import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import Inventory from './components/Inventory';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/inventory' element={<Inventory />}></Route>
      </Routes>
    </div>
  );
}

export default App;
