import React, { useEffect } from 'react'
import { Route } from 'react-router';
import gsap from 'gsap';
import Header from './components/header';
import './styles/App.scss'

// Pages
import Home from './pages/home';
import CaseStudies from './pages/caseStudies';
import Approach from './pages/approach';
import Services from './pages/services';
import About from './pages/about';

// Routes
const routes = [
  {
    path: '/', name: 'Home', Component: Home
  },
  {
    path: '/case-studies', name: 'Case Studies', Component: CaseStudies
  },
  {
    path: '/approach', name: 'Approach', Component: Approach
  },
  {
    path: '/services', name: 'Services', Component: Services
  },
  {
    path: '/about', name: 'About Octo-Animate', Component: About
  }
]

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

      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>

    </>

  );
}

export default App;