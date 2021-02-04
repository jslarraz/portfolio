import React, { Component } from 'react';
import {About, Banner, CaseStudy, Education, Footer, Header, Project, Services, Testimonial} from '../layouts/home05/index';

class Home05 extends Component {
    render() {
        return (
            <div className="counter-scroll fixed counter-scroll home2 has-one-page">
                <div id="mobile-menu-overlay" />
                <Header />
                <div id="content" className="content">
                    <div className="homepage-personal">
                        <Banner />

                        <div className="section slide-personal-Intro-second slide-dark">
                            <section className="testimonial s1 shape-am" id="testimonial">
                            </section>
                        </div>
                        <div className="section slide-personal-Intro-second slide-dark bg-white">
                            <section className="profile s1">
                                <div className="container" id="about">
                                    <About />
                                </div>
                            </section>
                        </div>
                        <Services />
                        <Education />
                        <CaseStudy />
                        <Testimonial />
                        <Project />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home05;
