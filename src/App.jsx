import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import Sale from './components/Sale/Sale';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact element = {<Home/>}/>
        <Route path='/catalog' element = {<Catalog/>}/>
        <Route path='/sale' element = {<Sale/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
