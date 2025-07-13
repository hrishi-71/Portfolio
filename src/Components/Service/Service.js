import './service.css'
import ServCard from './ServCard'
import { Link } from 'react-scroll'

const Service = () => {
    return (
        <div id='service' className=''>
            <h1 className='servHead'>Services I Offer</h1>
            <p className='servIntro mx-auto'>I help businesses and individuals build fast, responsive, and user-friendly web applications using modern technologies like React.js, Redux, and more.</p>

            {/* cards */}
            <div className="Cards row mx-auto">
                <div className="col-lg-4 col-md-6 px-2 py-2">
                    <ServCard image="brain.jpg" title="Frontend Development"
                        servlist={[
                            'Single Page Application',
                            'responsive ui/ux'
                        ]}
                    />
                </div>
                <div className="col-lg-4 col-md-6 px-2 py-2">
                    <ServCard image="Api.png" title="API Integration"
                        servlist={[
                            "Rest API's"
                        ]}
                    />
                </div>
                <div className="col-lg-4 col-md-6 px-2 py-2">
                    <ServCard image="state.jpg" title="State Management"
                        servlist={[
                            'Redux Toolkit',
                            'Context API'
                        ]}
                    />
                </div>
                <div className="col-lg-4 col-md-6 px-2 py-2">
                    <ServCard image="perform.jpg" title="Performance Optimization"
                        servlist={[
                            'Lazy Loading',
                            'Code Splitting'
                        ]}
                    />
                </div>
                <div className="col-lg-4 col-md-6 px-2 py-2">
                    <ServCard image="bug.png" title="Testing & Debugging"
                        servlist={[
                            'Unit Testing',
                            'Debugging'
                        ]}
                    />
                </div>
                <div className="col-lg-4 col-md-6 px-2 py-2">
                    <ServCard image="deploy.png" title="Deployment & Hosting"
                        servlist={[
                            'Netlify',
                            'Vercel'
                        ]}
                    />
                </div>
            </div>

            {/* carousel */}
            <div id="carouselTwo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselTwo" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active px-2">
                        <ServCard image="brain.jpg" title="Frontend Development"
                            servlist={[
                                'Single Page Application',
                                'responsive ui/ux'
                            ]}
                        />
                    </div>
                    <div className="carousel-item px-2">
                        <ServCard image="Api.png" title="API Integration"
                            servlist={[
                                "Rest API's"
                            ]}
                        />
                    </div>
                    <div className="carousel-item px-2">
                        <ServCard image="state.jpg" title="State Management"
                            servlist={[
                                'Redux Toolkit',
                                'Context API'
                            ]}
                        />
                    </div>
                    <div className="carousel-item px-2">
                        <ServCard image="perform.jpg" title="Performance Optimization"
                            servlist={[
                                'Lazy Loading',
                                'Code Splitting'
                            ]}
                        />
                    </div>
                    <div className="carousel-item px-2">
                        <ServCard image="bug.png" title="Testing & Debugging"
                            servlist={[
                                'Unit Testing',
                                'Debugging'
                            ]}
                        />
                    </div>
                    <div className="carousel-item px-2">
                        <ServCard image="deploy.png" title="Deployment & Hosting"
                            servlist={[
                                'Netlify',
                                'Vercel'
                            ]}
                        />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselTwo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselTwo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="final-word">
                <h3>Have an idea in mind? Let's build something great together.</h3>
                <Link to='contact' smooth={true} offset={25} duration={50}><span className='servContact'>Contact Me</span></Link>
            </div>
        </div>
    )
}

export default Service
