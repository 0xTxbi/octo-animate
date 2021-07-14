import React, { useEffect } from 'react'
import gsap from 'gsap';
import IntOverlay from './components/intOverlay';
import Banner from './components/banner';
import Header from './components/header';
import CaseStudies from './components/caseStudies'
import './styles/App.scss'

function App() {

  useEffect(() => {

    let vh = window.innerHeight * .01;
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    // Disble flashing
    gsap.to('body', 0, {
      css: {
        visibility: "visible"
      }
    })

    // Timeline
    const tl = gsap.timeline()

    tl.from('.line span', 2, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.5
      }
    }).to('.overlay-top', 1.5, {
      height: 0,
      ease: 'expo.inOut',
      stagger: {
        amount: 0.4
      }
    }).to('.overlay-bottom', 1.5, {
      width: 0,
      ease: 'expo.inOut',
      delay: -.8,
      stagger: {
        amount: 0.4
      }
    }).to('.int-overlay', 0, {
      css: {
        display: 'none'
      }
    })
    .from('.case-image img', 1.5, {
      scale: 1.5,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4
      }
    })

  }, [])

  return (

    <div className="App">
      <IntOverlay />
      <Header />
      <Banner />
      <CaseStudies />
    </div>

  );
}

export default App;