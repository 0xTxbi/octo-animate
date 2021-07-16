import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

    return (
        <nav>
            <div className="container">
                <div className="nav-columns">

                    <div className="nav-column">
                        <div className="nav-label">Menu</div>
                        <ul className="nav-links">
                            <li>
                                <NavLink to="/case-studies" exact>
                                    Case Studies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/approach" exact>
                                    Approach
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/services" exact>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us">
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="nav-column">
                        <div className="nav-label">Contact</div>
                        <div className="nav-infos">
                            <ul className="nav-info">
                                <li className="nav-info-label">Email</li>
                                <li>
                                    <NavLink to="/contact">
                                        Get in touch
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/consult">
                                        Free consultation
                                    </NavLink>
                                </li>
                            </ul >
                            {/* Address */}
                            <ul className="nav-info">
                                <li className="nav-info-label">Locations</li>
                                <li>8206 Dunisch Rd Elk Grove</li>
                                <li>Elk Grove, California</li>
                                <li>United States</li>
                            </ul>

                            {/* Contact addresses */}
                            <ul className="nav-info">
                                <li className="nav-info-label">Phone</li>
                                <li>+44 (0) 1234 5678</li>
                            </ul>

                            {/* Others */}
                            <ul className="nav-info">
                                <li className="nav-info-label">Other</li>
                                <li>Privacy Policy</li>
                                <li>Cookies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}

export default Navigation
