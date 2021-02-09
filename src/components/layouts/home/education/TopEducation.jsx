import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { withTranslation } from 'react-i18next'


class TopEducation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contenttop : [
                {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.3s',
                    year: 'University of Zaragoza',
                    title: 'Computer science graduate',
                    text: 'User experience (UX) design is the process design teams use to create products.'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.5s',
                    year: 'University of Zaragoza',
                    title: 'Computer science masters',
                    text: 'User experience (UX) design is the process design teams use to create products.'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '0.7s',
                    year: 'University of Zaragoza',
                    title: 'PhD on cybersecurity',
                    text: 'User experience (UX) design is the process design teams use to create products.'
                }
            ],
            contentbot : [
                {
                    id: 1,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '0.8s',
                    year: '2017 - 2021',
                    title: 'Researcher at',
                    office: 'Unizar',
                    text: 'User experience (UX) design is the process design teams use to create products.'
                },
                {
                    id: 2,
                    classname: 'experience-box experience-box-line t3',
                    datawow: '1s',
                    year: '2017 - 2020',
                    title: 'Professor at',
                    office: 'ACING',
                    text: 'Responsable del modulo "Diseño de arquitecturas seguras" en el Curso Avanzado de Ciberdefensa en la Academia de Ingenieros del Ejercito (ACING).'
                },
                {
                    id: 3,
                    classname: 'experience-box t3',
                    datawow: '1.2s',
                    year: '2017 - 2020',
                    title: 'Assistant at',
                    office: 'COIT',
                    text: 'User experience (UX) design is the process design teams use to create products.'
                }
            ]
        }
    }
    
    render() {
        const {t} = this.props
        return (
            <div className="animate-element delay5 fadeInUp">
                <div className="padding-bottom">
                    <div className="row">
                        {
                            this.state.contenttop.map(data => (
                                <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                    <div className={data.classname}>
                                        <div className="box-inner">
                                        <h3 className="f-info bg-s1 color-d6">{t('education.content.top.' + (data.id-1) + '.year')}</h3>
                                        <div className="exp-wrap">
                                            <div className="s-info mg-b11">{t('education.content.top.' + (data.id-1) + '.title')}</div>
                                            <p>
                                                {t('education.content.top.' + (data.id-1) + '.text')}
                                            </p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="row">
                    {
                        this.state.contentbot.map(data => (
                            <div className="col-lg-4 col-12 last-col animate-element wow delay5 fadeIn" data-wow-delay={data.datawow} key={data.id}>
                                <div className={data.classname}>
                                    <div className="box-inner">
                                    <h3 className="f-info bg-s1 color-d6">{t('education.content.bot.' + (data.id-1) + '.year')}</h3>
                                    <div className="exp-wrap">
                                        <div className="s-info mg-b11">{t('education.content.bot.' + (data.id-1) + '.title')} <Link to="#">{t('education.content.bot.' + (data.id-1) + '.office')}</Link></div>
                                        <p>
                                            {t('education.content.bot.' + (data.id-1) + '.text')}
                                        </p>        
                                    </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default withTranslation() (TopEducation);
