
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img
                            src="https://media.istockphoto.com/id/1166203849/photo/garden-worker-trimming-plants.jpg?s=612x612&w=0&k=20&c=tugEqkOzdA8y35diz6ngfz4BwXx_KRPVegFLgvaUHmw="
                            alt="About Us"
                            className="img-fluid rounded"
                        />
                    </div>
                    <div className="col-md-6">
                        <h2 className="mb-4 fw-bold">🌍 About Us</h2>
                        <p>
                            Welcome to <strong>GardenHub</strong>, your go-to destination for all things green and beautiful.
                            With a passion for nature and a dedication to sustainable living, we offer expert advice, quality
                            gardening tools, and premium plants to help you grow your dream garden.
                        </p>
                        <p>
                            Our team of gardening enthusiasts believes that every space, big or small, can be transformed
                            into a green paradise. Join us on this journey to make the world greener, one plant at a time.
                        </p>
                        <button className="btn btn-success mt-3">Learn More</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUs