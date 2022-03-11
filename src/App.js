import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RandomBeers from './pages/RandomBeers';
import NewBeer from './pages/NewBeer';
import AllBeers from './pages/AllBeers';
import Navbar from './components/Navbar';
import BeersDetails from './pages/BeersDetails'
import { useState } from 'react';

function App() {

  const [darkTheme, setDarkTheme] = useState(true)

  const darkStyles = {
    backgroundColor: "black",
    color:"darkGray"
  }

  const lightStyles = {
    backgroundColor:"white",
    color:"black"
  }

  const handleToggle = () =>{
    setDarkTheme(!darkTheme)
  }

  return (
    <div className="App" style={darkTheme ? darkStyles : lightStyles}>
      <button onClick={handleToggle}>Change Theme</button>

    
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/beers' element={<AllBeers/>}/>
    <Route path='/beer/:id/details' element={<BeersDetails/>}/>
    <Route path='/beers/random-beer' element={<RandomBeers/>}/>
    <Route path='/beer/new-beer' element={<NewBeer/>}/>

    </Routes>
    </div>
  );
}

export default App;
