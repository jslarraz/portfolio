import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import menus from '../menus';

import { withTranslation } from 'react-i18next'


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {}

        this.ref = {
            "es": React.createRef(),
            "en": React.createRef()
        }
    }

    setActive (lan) {
        const { i18n } = this.props
        i18n.changeLanguage(lan);

        Object.keys(this.ref)
            .map( key => this.ref[key].current.className = "");
        this.ref[lan].current.className = "font-weight-bolder"
    }

    render() {

        return (
            <header id="header" className="header header-style1">
                <div className="container">
                    <div className="flex-header d-flex justify-content-between align-items-center">
                        <div className="socials-list-hd s1 hv1" >
                            <Link to="#" onClick={() => { this.setActive('en'); }} ref={this.ref['en']}>EN</Link>
                            <Link to="#" onClick={() => { this.setActive('es'); }} ref={this.ref['es']}>ES</Link>
                        </div>
                        <div className="content-menu d-lg-flex">
                            <div className="nav-wrap">
                                <nav id="mainnav" className="mainnav">
                                    <ul className="menu ace-responsive-menu" data-menu-style="horizontal">
                                        {
                                            menus.map(menu => (
                                                <li key={menu.id1}><Link to={menu.tomenu} className="click-model">{menu.namemenu}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </div>
                            <div className="hire-me-s1 btn-general btn-hv-common d-lg-flex align-items-center">
                                <Link to="#" className="btn-inner border-corner2 lt-sp08 text-white">Contact Me</Link>
                            </div>
                        </div>
                        <div dir="rtl" className="btn-menu mobile-header__menu-button">
                            <div className="line line-1" />
                            <div className="line line-2" />
                            <div className="line line-3" />
                            <div className="line line-4" />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default withTranslation() (Header);


/*
                        <div className="socials-list-hd s1 hv1">
                            <Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                            <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                            <Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                        </div>
 */