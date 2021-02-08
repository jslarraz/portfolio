import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class About extends Component {
    constructor(props){
        super(props);
        console.log("about lan: " + props.language)

        this.state = {
            profile: [
                {
                    id: 1,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/linkedin.png',
                    alt: 'images',
                    name: 'LinkedIn',
                    normal: 'Follow Me'
                },
                {
                    id: 2,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/github.png',
                    alt: 'images',
                    name: 'GitHub',
                    normal: 'See My Work'
                },
                {
                    id: 3,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/07.png',
                    alt: 'images',
                    name: 'Uplabs',
                    normal: 'Download Here'
                },
                {
                    id: 4,
                    classname: 'profile-link border-corner2 d-flex align-items-center',
                    images: './images/section/08.png',
                    alt: 'images',
                    name: 'Skype',
                    normal: 'Connect with me'
                }
            ]
        }

        let content = {
            English: {
                title: "What We Do",
                whatWeDo: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>`
            },
            Spanish: {
                title: "ഞങ്ങൾ എന്തെല്ലാം ചെയ്യും",
                whatWeDo: `<p>പ്രിന്റ് ആൻഡ് ടൈപ്പുചെയ്യൽ വ്യവസായത്തിന്റെ ഡമ്മി കോഡാണ് ലോറെം ഇപ്സിയം . 1500-കൾ മുതൽ ലൊറെം ഇപ്സം വ്യവസായത്തിന്റെ സ്റ്റാൻഡേർഡ് ഡമ്മി പാഠമാണ്, അജ്ഞാതമായ ഒരു പ്രിന്റർ ഒരു തരം ഗാലക്സി എടുത്ത് ഒരു സ്പെസിഫിക്കേഷൻ ബുക്ക് ഉണ്ടാക്കാൻ അതിനെ അണിനിരത്തി.</p>
      <p>അഞ്ചു നൂറ്റാണ്ടുകൾക്കു ശേഷവും, ഇലക്ട്രോണിക്ക് ടൈപ്പ്സെറ്റിംഗിൽ കുതിച്ചുചാട്ടം, അത് മാറ്റമില്ലാതെ തുടരുകയാണ്.</p>
      `
            }
        };


        props.language === "Spanish"
            ? (content = content.Spanish)
            : (content = content.English);

    }
    render() {
        return (

            <div className="tf-modal-content" >
                <section className="profile s1 position-relative" id="about">
                    <div className="container" >
                        <div className="background-white">
                            <div className="d-lg-flex">
                                <div className="col-left">
                                    <div className="featured-post animate-element wow delay5 fadeInUp" data-wow-delay="0.5s">
                                        <img style={{width: '60%'}} src="images/section/03.png" alt="images"/>
                                    </div>
                                </div>
                                <div className="col-right">
                                    <div className="flat-spacer" data-desktop="55" data-mobile="20" data-smobile="20"></div>
                                    <div className="flat-title t1">
                                        <div className="animate-element wow delay5 fadeInDown" data-wow-delay="0.5s">
                                            <h4 className="sub-title mg-b22">About Me</h4>
                                            <h2 className="title-section mg-b26 color-d12">Hi, I am here to <span className="color-d4">help you.</span></h2>
                                            <p>
                                                I know it sounds crazy but it is true, I'm currently available to work with you. I've just finished my doctoral studies and I'm looking for a job.  <br /><br />
                                                My expertise is around the design of secure architectures with special focus on Identity and Access Management and API design and security. <br /><br />
                                                {this.props.language}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-list">
                                <div className="flat-carousel-box data-effect clearfix" data-gap="30" data-column="4" data-column2="3" data-column3="2" data-column4="1" data-column5="1" data-dots="false" data-auto="false" data-nav="false" data-loop="true">
                                    <div className="owl-carousel">
                                        {
                                            this.state.profile.map(data => (
                                                <div className={data.classname} key={data.id}>
                                                    <div className="featured-post">
                                                        <img src={data.images} alt={data.alt}/>
                                                    </div>
                                                    <div className="content-inside">
                                                        <h3 className="name"><Link to="#">{data.name}</Link></h3>
                                                        <span className="t-normal">{data.normal}</span>
                                                    </div>
                                                </div>
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

export default About;
