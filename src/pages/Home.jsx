import React from 'react'
import AboutInfo from '../components/AboutInfo'
import LaboratorySolution from '../components/LaboratorySolution'
import Team from '../components/Team'
import Testimonial from '../components/Testimonial'
import ServiceComponent from '../components/ServiceComponent'

export default function Home() {
    return (
        <>

            {/* <!-- Carousel Start --> */}
            <div className="container-fluid header-carousel px-0 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-start">
                                        <div className="col-lg-7 text-start">
                                            <h1 className="display-1 text-white animated slideInRight mb-3">Award Winning Laboratory Center</h1>
                                            <p className="mb-5 animated slideInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus.</p>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-lg-7 text-end">
                                            <h1 className="display-1 text-white animated slideInLeft mb-3">Expet Doctors & Lab Assistants</h1>
                                            <p className="mb-5 animated slideInLeft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus.</p>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInLeft">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <!-- Carousel End --> */}

            <AboutInfo />

            {/* <!-- Features Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-0 feature-row">
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                            <div className="feature-item border h-100 p-5">
                                <div className="icon-box-primary mb-4">
                                    <i className="bi bi-award text-dark"></i>
                                </div>
                                <h5 className="mb-3">Award Winning</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                            <div className="feature-item border h-100 p-5">
                                <div className="icon-box-primary mb-4">
                                    <i className="bi bi-people text-dark"></i>
                                </div>
                                <h5 className="mb-3">Expet Doctors</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                            <div className="feature-item border h-100 p-5">
                                <div className="icon-box-primary mb-4">
                                    <i className="bi bi-cash-coin text-dark"></i>
                                </div>
                                <h5 className="mb-3">Fair Prices</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                            <div className="feature-item border h-100 p-5">
                                <div className="icon-box-primary mb-4">
                                    <i className="bi bi-headphones text-dark"></i>
                                </div>
                                <h5 className="mb-3">24/7 Support</h5>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Features End --> */}


            <LaboratorySolution />

            {/* <!-- Video Modal Start --> */}
            <div className="modal modal-video fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content rounded-0">
                        <div className="modal-header">
                            <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div className="ratio ratio-16x9">
                                <iframe className="embed-responsive-item" src="" id="video" allowfullscreen
                                    allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Video Modal End --> */}


            <ServiceComponent />


            {/* <!-- Appoinment Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h1 className="display-6 mb-4">We Ensure You Will Always Get The Best Result</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor. Quisque vel lorem porttitor, malesuada arcu quis, fringilla risus. Pellentesque eu consequat augue.</p>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus augue, iaculis id elit eget, ultrices pulvinar tortor.</p>
                            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.3s">
                                <div className="icon-box-primary">
                                    <i className="bi bi-geo-alt text-dark fs-1"></i>
                                </div>
                                <div className="ms-3">
                                    <h5>Office Address</h5>
                                    <span>123 Street, New York, USA</span>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex align-items-start wow fadeIn" data-wow-delay="0.4s">
                                <div className="icon-box-primary">
                                    <i className="bi bi-clock text-dark fs-1"></i>
                                </div>
                                <div className="ms-3">
                                    <h5>Office Time</h5>
                                    <span>Mon-Sat 09am-5pm, Sun Closed</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <h2 className="mb-4">Online Appoinment</h2>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                                        <label for="mail">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                        <label for="mobile">Your Mobile</label>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-floating">
                                        <select className="form-select" id="service">
                                            <option selected>Pathology Testing</option>
                                            <option value="">Microbiology Tests</option>
                                            <option value="">Biochemistry Tests</option>
                                            <option value="">Histopatology Tests</option>
                                        </select>
                                        <label for="service">Choose A Service</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a message here" id="message"
                                            style={{
                                                height: "130px"
                                            }}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Appoinment Start --> */}

            <Team />


            <Testimonial />
        </>
    )
}

