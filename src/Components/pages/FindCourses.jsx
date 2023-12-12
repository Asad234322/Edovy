import React from 'react'
import Image1 from './../../images/find_course_card_6a48e5a7dd.png'
import Image2 from './../../images/apply_receive_offers_card_c8ae81bc61.png'
import Image3 from './../../images/chat_with_us_card_96d4edd190.png'


function FindCourses() {
    return (
        <>
            <div className="findcourse">
                <div className="text-section">
                    <div className="img-icon">
                    <img src={Image1} alt="img" />
                    </div>
                    <div className="content-text">
                        <h3>Find Courses</h3>
                        <p>Browse the top courses from over 120 universities worldwide</p>
                    </div>
                </div>
                <div className="text-section">
                    <div className="img-icon">
                        <img src={Image2} alt="img" />
                    </div>
                    <div className="content-text">
                        <h3>Apply and receive offers</h3>
                        <p>Instantly apply, upload academic documents and receive offers</p>
                    </div>
                </div>
                <div className="text-section">
                    <div className="img-icon">
                    <img src={Image3} alt="img" />
                    </div>
                    <div className="content-text">
                        <h3>Chat with us</h3>
                        <p>Chat with us to receive free expert advise from our friendly advisors</p>
                    </div>
                </div>
            </div>
            <div className="common-section">
                <h2>We'll help you find the right courses</h2>
                <p>Search from over 63950 courses by subject or university</p>
            </div>
        </>
    )
} 

export default FindCourses