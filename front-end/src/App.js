import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import NavbarComponent from './components/Navbar';


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
