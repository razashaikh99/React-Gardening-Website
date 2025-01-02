import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <section className="container my-5">
                <h2 className="text-center mb-5 fw-bold">📬 Contact Us</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">👤 Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">📧 Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">💬 Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Type your message here"></textarea>
                            </div>
                            <button type="submit" className="btn btn-success w-100">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs