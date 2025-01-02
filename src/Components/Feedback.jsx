import React from 'react'
import ContactUs from './ContactUs'
import Review from './Review'

const Feedback = () => {
    return (
        <div className='row'>
            <header className="bg-success text-white text-center py-5">
                <h1>💬 Feedback & Reviews</h1>
                <p>We value your feedback and love to hear from you!</p>
            </header>
            <div className='col-md-6'>
                <ContactUs />
            </div>
            <div className='col-md-6'>
                <Review />
            </div>

        </div>
    )
}

export default Feedback