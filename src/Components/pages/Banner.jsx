import React from 'react'
import Bannerimg from './../../images/Banner.webp'
import './stylesheet.css'
function Banner() {
    return (
        <>
            <div className='Banner'>
                <img src={Bannerimg} alt="Description" />
            </div>
            <div className="howItWork">
                <h2>How it Work</h2>
            </div>
        </>
    )
}

export default Banner