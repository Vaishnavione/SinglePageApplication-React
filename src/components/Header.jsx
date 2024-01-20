import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid py-2 d-none d-lg-flex">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <small className="me-3"><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
                            <small className="me-3"><i className="fa fa-clock me-2"></i>Mon-Sat 09am-5pm, Sun Closed</small>
                        </div>
                        <nav className="breadcrumb mb-0">
                            <a className="breadcrumb-item small text-body" href="#">Career</a>
                            <a className="breadcrumb-item small text-body" href="#">Support</a>
                            <a className="breadcrumb-item small text-body" href="#">Terms</a>
                            <a className="breadcrumb-item small text-body" href="#">FAQs</a>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}


            {/* <!-- Brand Start --> */}
            <div className="container-fluid bg-primary text-white pt-4 pb-5 d-none d-lg-flex">
                <div className="container pb-2">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <i className="bi bi-telephone-inbound fs-2"></i>
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Call Now</h5>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                        <Link to="/" className="h1 text-white mb-0">Lab<span className="text-dark">sky</span></Link>
                        <div className="d-flex">
                            <i className="bi bi-envelope fs-2"></i>
                            <div className="ms-3">
                                <h5 className="text-white mb-0">Mail Now</h5>
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Brand End --> */}


            {/* <!-- Navbar Start --> */}
            <div className="container-fluid sticky-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-white py-lg-0 px-lg-3">
                        <a href="index.html" className="navbar-brand d-lg-none">
                            <h1 className="text-primary m-0">Lab<span className="text-dark">sky</span></h1>
                        </a>
                        <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse"
                            data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav">
                                <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                                <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                            </div>
                            <div className="ms-auto d-none d-lg-flex">
                                <Link className="btn btn-sm-square btn-primary ms-2"><i className="fab fa-facebook-f"></i></Link>
                                <Link className="btn btn-sm-square btn-primary ms-2"><i className="fab fa-twitter"></i></Link>
                                <Link className="btn btn-sm-square btn-primary ms-2"><i className="fab fa-linkedin-in"></i></Link>
                                <Link className="btn btn-sm-square btn-primary ms-2"><i className="fab fa-youtube"></i></Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}
        </>
    )
}
