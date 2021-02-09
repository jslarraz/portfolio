import React, { Component } from 'react';
import { TopEducation } from './education/index';
import {Link} from "react-router-dom";
import { withTranslation } from 'react-i18next'

class Education extends Component {
    render() {
        const {t} = this.props
        return (
            <div className="tf-modal-content">
                <section className="flat-education s1 position-relative" id="resume">
                    <div className="container">
                        <div className="d-lg-flex">

                            <div className="flat-title t1 animate-element wow delay5 fadeInDown" style={{width: '80%'}} data-wow-delay="0.5s">
                                <h4 className="sub-title mg-b13">{t('education.subtitle')}</h4>
                                <h2 className="title-section color-d12">{t('education.title')}</h2>
                            </div>

                            <div className="animate-element wow delay5 fadeInUp" style={{width: '20%'}} data-wow-delay="0.5s">
                                <div className="fl-btn btn-general btn-hv-border">
                                    <Link to="#" className="border-corner5 f-w500 lt-sp095 text-white ">{t('education.button')}</Link>
                                </div>
                            </div>

                        </div>
                        <TopEducation />
                    </div>
                </section>
            </div>
        );
    }
}

export default withTranslation() (Education);
