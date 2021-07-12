import React from 'react'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'

const Banner = () => {
    return (

        <section className="main">
            <div className="container">
                <div className="row">
                    <h2>
                        <div className="line">
                            <span>Perfecting fluidity</span>
                        </div>
                        <div className="line">
                            <span>let's jump right in.</span>
                        </div>
                    </h2>

                    <div className="btn-row">
                        <a href="/">Start exploring <RightArrow /></a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner