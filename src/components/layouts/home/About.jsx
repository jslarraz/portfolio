import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { withTranslation } from 'react-i18next'

class About extends Component {
    constructor(props){
        super(props);

        this.state = {
            profile: [
                {
                    id: 1,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/linkedin.png',
                    alt: 'images',
                    link: 'https://www.linkedin.com/in/jorge-sancho-larraz',
                    name: 'LinkedIn',
                    normal: 'Follow Me'
                },
                {
                    id: 2,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/github.png',
                    alt: 'images',
                    link: 'https://github.com/jslarraz',
                    name: 'GitHub',
                    normal: 'See My Work'
                },
                {
                    id: 3,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/07.png',
                    alt: 'images',
                    link: 'https://diec2.unizar.es/personal/jorge-sancho-larraz',
                    name: 'Unizar',
                    normal: 'Current position'
                },
                {
                    id: 4,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/08.png',
                    alt: 'images',
                    link: '#',
                    name: 'Skype',
                    normal: 'Connect with me'
                }
            ]
        }
    }
    render() {
        const {t} = this.props
        return (
            <div className="tf-modal-content" >
                <section className="profile s1 position-relative" id="about">
                    <div className="container" >
                        <div className="background-white">
                            <div className="d-lg-flex">
                                <div className="col-left">
                                    <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                        <img style={{width: '70%'}} src="images/section/03.png" alt="images"/>
                                    </div>
                                </div>
                                <div className="col-right">
                                    <div className="flat-spacer" data-desktop="55" data-mobile="20" data-smobile="20"></div>
                                    <div className="flat-title t1">
                                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                            <h4 className="sub-title mg-b22">{t('about.subtitle')}</h4>
                                            <h2 className="title-section mg-b26 color-d12">{t('about.title.b')}<span className="color-d4">{t('about.title.y')}</span></h2>
                                            <p>
                                                {t('about.content')}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-list">
                                <div className="flat-carousel-box data-effect clearfix" data-gap="30" data-column="4" data-column2="3" data-column3="2" data-column4="1" data-column5="1" data-dots="false" data-auto="false" data-nav="false" data-loop="true">
                                    <div className="owl-carousel">
                                        {
                                            this.state.profile.map( (data, index) => (
                                                <a href={data.link}>
                                                    <div className={data.classname} key={data.id}>
                                                        <div className="featured-post">
                                                            <img src={data.images} alt={data.alt}/>
                                                        </div>
                                                        <div className="content-inside">
                                                            <h3 className="name">{t('profile.' + (data.id-1) + '.name')}</h3>
                                                            <span className="t-normal">{t('profile.' + (data.id-1) + '.normal')}</span>
                                                        </div>
                                                    </div>
                                                </a>
                                            ))
                                        }
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

export default withTranslation() (About);
