import React from 'react'

const InternalService = () => {
    return (
        <div>
            <section className="container my-5">
                <h2 className="text-center mb-5 fw-bold">🏡 Internal Gardening Services</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://d17x34b9fcvxk7.cloudfront.net/static/marketing/images/hero-backgrounds/gardener.jpg" className="card-img-top card-img" alt="Indoor Plant Setup" />
                            <div className="card-body">
                                <h5 className="card-title">🌿 Indoor Plant Setup</h5>
                                <p className="card-text">Create refreshing indoor spaces with our professional plant setup services.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://www.evergreen.ca/wp-content/uploads/stories/iStock-519977247.jpg" className="card-img-top card-img" alt="Water Management" />
                            <div className="card-body">
                                <h5 className="card-title">💧 Water Management</h5>
                                <p className="card-text">Efficient irrigation systems for healthy and thriving plants indoors.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://images.theconversation.com/files/550227/original/file-20230926-21-14uatg.jpg?ixlib=rb-4.1.0&rect=0%2C8%2C5572%2C3701&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip" className="card-img-top card-img" alt="Plant Health Monitoring" />
                            <div className="card-body">
                                <h5 className="card-title">🩺 Plant Health Monitoring</h5>
                                <p className="card-text">Regular monitoring to ensure your indoor plants remain disease-free.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InternalService