import React from 'react'

export default function AboutInfo() {
    return (
        <>
            {/* <!-- About Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="row g-0">
                                <div className="col-6">
                                    <img className="img-fluid" src="img/about-1.jpg" />
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid" src="img/about-2.jpg" />
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid" src="img/about-3.jpg" />
                                </div>
                                <div className="col-6">
                                    <div className="bg-primary w-100 h-100 mt-n5 ms-n5 d-flex flex-column align-items-center justify-content-center">
                                        <div className="icon-box-light">
                                            <i className="bi bi-award text-dark"></i>
                                        </div>
                                        <h1 className="display-1 text-white mb-0" data-toggle="counter-up">25</h1>
                                        <small className="fs-5 text-white">Years Experience</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="display-6 mb-4">Trusted Lab Experts and Latest Lab Technologies</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.</p>
                            <div className="row g-4 g-sm-5 justify-content-center">
                                <div className="col-sm-6">
                                    <div className="about-fact btn-square flex-column rounded-circle bg-primary ms-sm-auto">
                                        <p className="text-white mb-0">Awards Winning</p>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">9999</h1>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-start">
                                    <div className="about-fact btn-square flex-column rounded-circle bg-secondary me-sm-auto">
                                        <p className="text-white mb-0">Complete Cases</p>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">9999</h1>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="about-fact mt-n130 btn-square flex-column rounded-circle bg-dark mx-sm-auto">
                                        <p className="text-white mb-0">Happy Clients</p>
                                        <h1 className="text-white mb-0" data-toggle="counter-up">9999</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    )
}
