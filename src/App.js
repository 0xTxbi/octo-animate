import React, { useEffect } from 'react'
import gsap from 'gsap';
import Header from './components/header';
import './styles/App.scss'
import Home from './pages/home';

function App() {

  useEffect(() => {

    // Obtain browser's inner height and set css vh variable
    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

     // Disble flashing
     gsap.to('body', 0, {
      css: {
          visibility: "visible"
      }
      
  })

  }, [])

  return (

    <>
      <Header />
      <Home />
    </>

  );
}

export default App;