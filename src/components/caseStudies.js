import React from 'react'
import { ReactComponent as PrevArrow } from '../assets/arrow-left.svg'
import { ReactComponent as NextArrow } from '../assets/arrow-right.svg'
import octoblue from '../assets/octo-blue.jpeg'
import octorange from '../assets/octo-orange.jpeg'
import octopurp from '../assets/octo-purp.jpeg'

const Cases = () => {

    const caseStudies = [{
        id: 1,
        subtitle: 'OctoBlue',
        title: 'Get blued up in real-time',
        img: octoblue
    },
    {
        id: 2,
        subtitle: 'OctOrange',
        title: 'Get oranged up in real-time',
        img: octorange
    },
    {
        id: 3,
        subtitle: 'OctoPurp',
        title: 'Get purped up in real-time',
        img: octopurp
    }]

    return (
        <section className="cases">
            <div className="container-fluid">
                <div className="cases-navigation">

                    <div className="cases-arrow prev disabled">
                        <PrevArrow />
                    </div>
                    <div className="cases-arrow next">
                        <NextArrow />
                    </div>

                </div>

                <div className="row">

                    {caseStudies.map((caseItem) => (
                        <div className="case" key={caseItem.id}>
                            <div className="case-details">
                                <span>{caseItem.subtitle}</span>
                                <h2>{caseItem.title}</h2>
                            </div>
                            <div className="case-image">
                                <img src={caseItem.img} alt={caseItem.title} />
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    )

}

export default Cases