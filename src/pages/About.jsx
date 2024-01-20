import React from 'react'
import AboutInfo from '../components/AboutInfo'
import LaboratorySolution from '../components/LaboratorySolution'
import Team from '../components/Team'

export default function About() {
    return (
        <>

            {/* <!-- Page Header Start --> */}
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container text-center py-5 mt-4">
                    <h1 className="display-2 text-white mb-3 animated slideInDown">About</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item" aria-current="page">About</li>
                        </ol>
                    </nav>
                </div>
            </div>
            {/* <!-- Page Header End --> */}

            <AboutInfo />

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

            <Team />
        </>
    )
}

