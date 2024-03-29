import React from 'react'
import Testimonial from '../components/Testimonial'
import ServiceComponent from '../components/ServiceComponent'

export default function Service() {
    return (
        <>

            {/* <!-- Page Header Start --> */}
            <div class="container-fluid page-header py-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container text-center py-5 mt-4">
                    <h1 class="display-2 text-white mb-3 animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb justify-content-center mb-0">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item"><a href="#">Pages</a></li>
                            <li class="breadcrumb-item" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            <ServiceComponent />

            <Testimonial />
        </>
    )
}
