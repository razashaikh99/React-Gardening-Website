import React from 'react'
import InternalService from './InternalService'
import ExternalService from './ExternalService'

const Service = () => {
    return (
        <div>
            <header className="bg-success text-white text-center py-5">
                <h1>🌟 Our Gardening Services</h1>
                <p>Explore our wide range of internal and external gardening services.</p>
            </header>

            <InternalService />
            <ExternalService />
        </div>
    )
}

export default Service