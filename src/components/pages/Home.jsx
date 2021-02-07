import React, { Component } from 'react';
import {About, Banner, CaseStudy, Education, Footer, Header, Project} from '../layouts/home/index';

class Home extends Component {
    constructor(props){
        super(props);

        console.log("home lan: " + props.language)
    }

    render() {
        return (
            <div className="counter-scroll fixed counter-scroll home2 has-one-page">
                <div id="mobile-menu-overlay" />
                <Header />
                <div id="content" className="content">
                    <div className="homepage-personal">
                        <Banner />
                        <About  language={this.props.language}/>
                        <Education />
                        <CaseStudy />
                        <Project />
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
