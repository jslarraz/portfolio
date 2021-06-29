import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next'

class CaseStudy extends Component {
    render() {
        const {t} = this.props
        return (
            <div className="tf-modal-content">
                <section className="flat-case-study s3" id="portfolio">
                    <div className="container">
                        <div className="d-md-flex">
                            <div className="col-left animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                <div className="image-link t1">
                                    <div className="featured-post">
                                        <a href="https://github.com/jslarraz/rmon_probe"><img src="images/section/40.jpg" alt="images" /></a>
                                    </div>
                                </div>
                                <div className="image-link t1">
                                    <div className="featured-post">
                                        <a href="#"><img src="images/section/41.jpg" alt="images" /></a>
                                    </div>
                                </div>
                                <div className="fl-btn text-center"> 
                                    <a href={t('portfolio.link')} className="f-w500">{t('portfolio.button')}</a>
                                </div>
                            </div>
                            <div className="flat-spacer" data-desktop={0} data-mobile={100} data-smobile={100} />
                            <div className="col-right animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                <div className="flat-title t1 mg-b60">
                                    <h4 className="sub-title mg-b13">{t('portfolio.subtitle')}</h4>
                                    <h2 className="title-section color-d12 mg-b20">{t('portfolio.title')}</h2>
                                    <p>
                                        {t('portfolio.content')}
                                    </p>
                                </div>
                                <div className="pd-right">
                                    <div className="image-link t1">
                                        <div className="featured-post">
                                            <a href="https://github.com/jslarraz/biometricBechmarkPlatform"><img src="images/section/42.jpg" alt="images" /></a>
                                        </div>
                                    </div>
                                    <div className="image-link t1">
                                        <div className="featured-post">
                                            <a href="https://github.com/jslarraz/obliv-c"><img src="images/section/43.jpg" alt="images" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default withTranslation() (CaseStudy);
