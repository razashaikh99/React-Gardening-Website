import React from 'react'

const ExternalService = () => {
    return (
        <div>
            <section className="container my-5">
                <h2 className="text-center mb-5 fw-bold">🌳 External Gardening Services</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://www.lawdonut.co.uk/business/sites/lawdonut-business/files/production/image/gardenservices_0.jpg" className="card-img-top card-img" alt="Garden Landscaping" />
                            <div className="card-body">
                                <h5 className="card-title">🌻 Garden Landscaping</h5>
                                <p className="card-text">Transform your outdoor space into a stunning green paradise.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://thumbs.dreamstime.com/b/smiling-female-gardener-holding-crate-colorful-ornamental-flowers-gardening-services-copy-space-248192959.jpg" className="card-img-top card-img" alt="Seasonal Plant Care" />
                            <div className="card-body">
                                <h5 className="card-title">🍂 Seasonal Plant Care</h5>
                                <p className="card-text">Tailored care to keep your garden thriving all year round.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm">
                            <img src="https://img.freepik.com/free-photo/female-gardener-s-hand-cutting-plant-with-secateurs_23-2148165259.jpg" className="card-img-top card-img" alt="Outdoor Lighting" />
                            <div className="card-body">
                                <h5 className="card-title">💡 Outdoor Lighting</h5>
                                <p className="card-text">Enhance your garden's beauty with custom outdoor lighting setups.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ExternalService