import React from 'react'

const Review = () => {
    return (
        <div>
            <section className="container my-5">
                <h2 className="text-center mb-5 fw-bold">⭐ Customer Reviews</h2>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3">
                            <h5 className="card-title">🌟 Alex Smith</h5>
                            <p className="card-text">"Amazing gardening services! My garden has never looked better."</p>
                            <p className="text-muted">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3">
                            <h5 className="card-title">🌟 Sarah Johnson</h5>
                            <p className="card-text">"Professional team and excellent support. Highly recommended!"</p>
                            <p className="text-muted">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-sm p-3">
                            <h5 className="card-title">🌟 Michael Lee</h5>
                            <p className="card-text">"Quality plants and timely services. Very satisfied!"</p>
                            <p className="text-muted">⭐⭐⭐⭐⭐</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Review