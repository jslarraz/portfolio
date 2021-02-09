import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <div className="tf-modal-content justify-content-end"> 
                <footer id="footer" className="footer footer-s2">

                    <div id="bottom" className="bottom-s3">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright lt-sp02">
                                        © Jorge Sancho, 2021 All rights reserved.
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;

/*
                              <div className="col-lg-6">

                                </div>
                                <div className="col-lg-2">
                                    <div className="socials-list color-s2">
                                        <Link to="#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                                        <Link to="#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                                        <Link to="#"><i className="fa fa-instagram" aria-hidden="true" /></Link>
                                    </div>
                                </div>
 */