import React, { useState, useEffect } from 'react'
import gsap from 'gsap';
import IntOverlay from '../components/intOverlay';
import Banner from '../components/banner';
import CaseStudies from '../components/caseStudies'

// Timeline
const tl = gsap.timeline()

const homeAnimation = (completeAnimation) => {

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
            },
            onComplete: completeAnimation
        })

}

const Home = () => {

    const [animationComplete, setAnimationComplete] = useState(false)

    const completeAnimation = () => {
        setAnimationComplete(true)
    }

    useEffect(() => {

        // Invoke home animation function
        homeAnimation(completeAnimation)

    }, [])


    return (

        <>
        {animationComplete === false ? <IntOverlay /> : ''}
            <Banner />
            <CaseStudies />
        </>

    )
}

export default Home
