import React, { useState } from 'react';

import head from './../../assets/about-head-shape.webp';
import about1 from './../../assets/banner-female-2.webp';
import about2 from './../../assets/discover-1.webp';
import client1 from './../../assets/brand-logo-1.png';
import client2 from './../../assets/brand-logo-2.png';
import client3 from './../../assets/brand-logo-3.png';
import client4 from './../../assets/brand-logo-4.png';
import client5 from './../../assets/brand-logo-5.png';
import client6 from './../../assets/brand-logo-6.png';
import team1 from './../../assets/team-1.webp';
import team2 from './../../assets/team-2.webp';
import team3 from './../../assets/team-3.webp';


const About = () => {
    const [quote, setQuote] = useState(
        '"Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."'
    );

    return (
        <>
            {/* About Header */}
            <section className="about-glowing-section d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-md-start text-center">
                            <p className="text-uppercase text-muted small mb-2">Introducing</p>
                            <h1 className="fw-bold display-5">About Glowing</h1>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main About Content */}
            <section className="py-5">
                <div className="container text-center mb-5">
                    <img src={head} alt="decorative leaf" />
                    <h2 className="fw-bold">
                        We strive to live with compassion, <br /> kindness and empathy
                    </h2>
                    <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
                        A lot of so-called stretch denim pants out there are just sweatpants - they get baggy
                        and lose their shape. Not cool. Our tightly knitted fabric holds its from after
                        repeated wear. Plus, Aldays dress up or down, no prob. So you can wear them all day.
                        Get it?
                    </p>
                </div>

                {/* Face Image and Description */}
                <div className="container mb-5">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-md-0 about-img1">
                            <img src={about1} alt="Face" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="fw-bold">Give your skin a healthy glow everyone</h4>
                            <p className="text-muted">
                                Nourish your with radiant hydration. Our skincare essentials are crafted
                                with premium ingredients to restore balance, enhance glow, and keep your complexion healthy
                                every day. Experience the perfect blend of nourishment and luxury for a naturally luminous look.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission and Product Image */}
                <div className="container">
                    <div className="row align-items-center flex-md-row-reverse">
                        <div className="col-md-6 mb-4 mb-md-0 about-img1">
                            <img src={about2} alt="Products" className='img-fluid rounded' />
                        </div>
                        <div className="col-md-6">
                            <h4 className="fw-bold">Our Mission</h4>
                            <p className="text-muted">
                                We believe in healthy, radiant skin for everyone. Our products are thoughtfully
                                crafted with high-quality ingredients to nourish, protect, and enhance your natural glow-because 
                                confiance starts with great skin. 
                                Experience the perfect fusion of science and nature for skincare that truly transforms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Client Logo Section */}
            <section className="container-fluid bg-light">
                <div className="container py-5 text-center">
                    <div className="mx-auto" style={{ maxWidth: '800px' }}>
                        <p className="fs-4 mb-4 fw-bold">{quote}</p>
                    </div>

                    <div className="row justify-content-center align-items-center mt-5 gy-4">
                        <div className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                            onClick={() => setQuote('"Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."')}
                            style={{cursor: 'pointer'}}
                        >
                            <img 
                                src={client1} 
                                alt="Goodness" 
                                className="img-fluid" 
                                style={{maxHeight: '60px', objectFit:'contain'}} 
                            />
                        </div>

                        <div className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                            onClick={() => setQuote('"Great beauty service! The experience was truly amazing, and I feel more confident and radiant with my beauty after every visit."')}
                            style={{cursor: 'pointer'}}
                        >
                            <img 
                                src={client2} 
                                alt="Grand Golden Gallery" 
                                className="img-fluid" 
                                style={{maxHeight: '60px', objectFit: 'contain'}} 
                            />
                        </div>

                        <div className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                            onClick={() => setQuote('"Amagazing product. The results are so transformative in texture and my face plump and healthy. Highly recommend!"')}
                            style={{cursor: 'pointer'}}
                        >
                            <img 
                                src={client3} 
                                alt="Parker & Co." 
                                className="img-fluid" 
                                style={{maxHeight: '60px', objectFit: 'contain'}} 
                            />
                        </div>

                        <div className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                            onClick={() => setQuote('"Quality products at great prices, delivering the perfect mix of affordability and excellence. Each item ensures great value for money."')}
                            style={{cursor: 'pointer'}}
                        >
                            <img 
                                src={client4} 
                                alt="The Beast" 
                                className="img-fluid" 
                                style={{maxHeight: '60px', objectFit:'contain'}} 
                            />
                        </div>

                        <div className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                            onClick={() => setQuote('"Great beauty service! The experience was truly amazing, and I feel more confident and radiant with my beauty after every visit."')}
                            style={{cursor: 'pointer'}}
                        >
                            <img 
                                src={client5} 
                                alt="The Hayden" 
                                className="img-fluid" 
                                style={{maxHeight: '60px', objectFit: 'contain'}} 
                            />
                        </div>

                        <div className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                            onClick={() => setQuote('"Amagazing product. The results are so transformative in texture and my face plump and healthy. Highly recommend!"')}
                            style={{cursor: 'pointer'}}
                        >
                            <img 
                                src={client6} 
                                alt="Good Mood" 
                                className="img-fluid" 
                                style={{maxHeight: '60px', objectFit: 'contain'}} 
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section">
                <h2 className="team-title">
                    We pride ourselves on having a team of highly skilled
                </h2>

                <div className="team-row">
                    <div className="team-member">
                        <div className="team-image-wrapper">
                            <img src={team1} alt="Jennifer C." className="team-image" />
                            <div className="team-social">
                                <a href="#"><i className="ri-instagram-line"></i></a>
                                <a href="#"><i className="ri-twitter-line"></i></a>
                                <a href="#"><i className="ri-facebook-line"></i></a>
                                <a href="#"><i className="ri-youtube-line"></i></a>
                            </div>
                        </div>
                        <div className="team-name">Slava Fedutik</div>
                        <p className="team-role">- Founder, Chief Creative</p>
                    </div>

                    <div className="team-member">
                        <div className="team-image-wrapper">
                            <img src={team2} alt="Jennifer C." className="team-image" />
                            <div className="team-social">
                                <a href="#"><i className="ri-instagram-line"></i></a>
                                <a href="#"><i className="ri-twitter-line"></i></a>
                                <a href="#"><i className="ri-facebook-line"></i></a>
                                <a href="#"><i className="ri-youtube-line"></i></a>
                            </div>
                        </div>
                        <div className="team-name">Jennifer C.</div>
                        <p className="team-role">- Founder, CEO</p>
                    </div>

                    <div className="team-member">
                        <div className="team-image-wrapper">
                            <img src={team3} alt="Jennifer C." className="team-image" />
                            <div className="team-social">
                                <a href="#"><i className="ri-instagram-line"></i></a>
                                <a href="#"><i className="ri-twitter-line"></i></a>
                                <a href="#"><i className="ri-facebook-line"></i></a>
                                <a href="#"><i className="ri-youtube-line"></i></a>
                            </div>
                        </div>
                        <div className="team-name">Valeriia Nadopta</div>
                        <p className="team-role">- Founder, COO</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default About;
