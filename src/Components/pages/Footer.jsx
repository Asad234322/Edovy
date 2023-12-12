import React from 'react'
import logo from './../../images/logo.svg'
import appstores from './../../images/download.png'
import AIRC from './../../images/AIRC.jfif'


function Footer() {
  return (
  <>
     <div className="footer">
      <div className="col">
        <img src={logo} alt="logo" />
        <img className="appStare" src={appstores} alt="app store" />
        <img className="appStare" src={AIRC} alt="ARIC" />
      </div>
      <div className="col">
        <h3>Explore</h3>
        <span>Courses</span>
        <span>Institutions</span>
        <span>Download App</span>
        <span>Refer & Earn</span>
      </div>
      <div className="col">
        <h3>About</h3>
        <span>About Edvoy</span>
        <span>For Partner</span>
        <span>Careers</span>
        <span>Contact Us</span>
        <span>Privacy Policy</span>
        <span>Terms of Services</span>
        <span>Site map</span>
      </div>
      <div className="col">
        <h3>Resources</h3>
        <span>Article</span>
        <span>FAQs</span>
        <span>Events</span>
      </div>
      <div className="col">
        <h3>Popular Courses</h3>
        <span>Law Courses</span>
        <span>Computer Science Courses</span>
        <span>Cyber Security Courses</span>
        <span>Naval Architecture Courses</span>
        <span>Artificial Intelligence Courses</span>
        <span>MBA Courses in UK</span>
        <span>HR courses in canada</span>
        <span>Business analytics courses in USA</span>
      </div>
    </div>
    {/* <div className="bottomBTN">
    <i class="fa-solid fa-message-middle"></i>
    </div> */}
  </>
  )
}

export default Footer