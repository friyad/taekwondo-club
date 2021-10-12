import React from 'react';
import './Footer.css'
import logo from '../../images/taekwondo-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faCalculator, faMailBulk, faPhone, faPhotoVideo, faVoicemail } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer py-10 mt-32">
            <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-10 w-10/12 mx-auto">
                <div className="">
                    <div className="flex items-center col-span-3">
                        <img width="100px" src={logo} alt="" />
                        <a className="ml-2 font-bold text-xl" href="">Taekwondo Club</a>
                    </div>
                    <p className="text-justify pr-10">"Taekwondo Club is a Martial Arts institution that specializes in the form of Changmookwan Taekwondo. The institution certified and recognized by World Taekwondo Changmookwan and Changmookwan Taekwondo Bangladesh. The Institution has International Black Belt holders as instructors who provide top of the line martial arts training to its students.  The students of the institution regularly participate in both national and international tournaments and by doing so, they have won numerous accolades. The institution helps students to gain access to Dan certification from Korea and also helps students to regularly participate in international and national tournaments."</p>
                </div>
                <div className="text-left lg:ml-16">
                    <h1 className="text-2xl font-bold">Our Socail Media</h1>
                    <br />

                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon className="text-4xl" icon={faFacebookSquare} />
                        <span className="text-xl ml-2">Facebook</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon className="text-4xl" icon={faYoutubeSquare} />
                        <span className="text-xl ml-2">YouTube</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon className="text-4xl" icon={faTwitterSquare} />
                        <span className="text-xl ml-2">Twitter</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon className="text-4xl" icon={faLinkedin} />
                        <span className="text-xl ml-2">Linkedin</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon className="text-4xl" icon={faInstagramSquare} />
                        <span className="text-xl ml-2">Instagram</span>
                    </div>
                </div>
                <div className="text-left lg:ml-16">
                    <h1 className="text-2xl font-bold">Contact us</h1>
                    <br />
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon className="text-4xl" icon={faPhone} />
                        <span className="text-xl ml-2">+09********54</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon className="text-4xl" icon={faMailBulk} />
                        <span className="text-xl ml-2">taekwondo.club@gmail.com</span>
                    </div>
                    <div className="flex items-center mb-6">
                        <FontAwesomeIcon className="text-4xl" icon={faAddressCard} />
                        <span className="text-xl ml-2">*****</span>
                    </div>
                </div>
            </div>
            <p>© Copyright Taekwondo Club 2022 by Riyad Hossain</p>
        </div >
    );
};

export default Footer;