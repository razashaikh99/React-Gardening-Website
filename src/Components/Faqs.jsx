import React from 'react'

const Faqs = () => {
    return (
        <div>
            <section className="container my-5">
                <h2 className="text-center mb-5 fw-bold">❓ Frequently Asked Questions</h2>
                <div className="accordion" id="faqsAccordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                🌱 What services do you offer?
                            </button>
                        </h2>
                        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#faqsAccordion">
                            <div className="accordion-body">
                                We offer indoor and outdoor gardening services, including landscaping, plant care, and water management.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                💧 How often should I water my plants?
                            </button>
                        </h2>
                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#faqsAccordion">
                            <div className="accordion-body">
                                Watering frequency depends on the plant type and weather conditions, but most plants need watering once or twice a week.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                📦 Do you provide seasonal maintenance?
                            </button>
                        </h2>
                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#faqsAccordion">
                            <div className="accordion-body">
                                Yes, we offer seasonal packages to ensure your garden remains healthy throughout the year.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                🌳 Do you offer garden design services?
                            </button>
                        </h2>
                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#faqsAccordion">
                            <div className="accordion-body">
                                Yes, we offer custom garden design solutions tailored to your needs.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq5">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                🐞 How do you handle pest control?
                            </button>
                        </h2>
                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#faqsAccordion">
                            <div className="accordion-body">
                                We use eco-friendly pest control methods to ensure plant health.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq6">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                📅 Can I schedule regular garden maintenance?
                            </button>
                        </h2>
                        <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="faq6" data-bs-parent="#faqsAccordion">
                            <div className="accordion-body">
                                Yes, we offer flexible maintenance plans to suit your schedule.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq7">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                🛠 Do you provide garden tools?
                            </button>
                        </h2>
                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="faq7" data-bs-parent="#faqsAccordion">
                            <div className="accordion-body">
                                Yes, we offer high-quality garden tools and equipment.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="faq8">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                📦 Do you offer plant delivery?
                            </button>
                        </h2>
                        <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="faq8" data-bs-parent="#faqsAccordion">
                            <div className="accordion-body">
                                Yes, we deliver plants directly to your doorstep.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Faqs