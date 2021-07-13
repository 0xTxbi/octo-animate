import React, { useEffect } from 'react'
import Banner from './components/banner';
import Header from './components/header';
import CaseStudies from './components/caseStudies'
import './styles/App.scss'

function App() {

  useEffect(() => {

    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

  }, [])

  return (

    <div className="App">
      <Header />
      <Banner />
      <CaseStudies />
    </div>

  );
}

export default App;