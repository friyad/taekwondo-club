import { faFacebookSquare, faGooglePlusSquare, faLinkedin, faTwitterSquare, } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Instructor.css'

const Instructor = (props) => {
    const { designation, name, photo } = props.instructor;


    return (
        <div className="border-2 text-center rounded-xl shadow-xl ">
            <div className="overflow-hidden">
                <img src={photo} className="h-80 w-full rounded-t-xl image-style" alt="" />
            </div>
            <h1 className="text-2xl font-bold pt-4 pb-2">{name}</h1>
            <p >--{designation}</p>
            <div className="flex justify-around text-3xl mt-3 mb-3">
                <FontAwesomeIcon className="hover:text-blue-900 transition" icon={faFacebookSquare}></FontAwesomeIcon>
                <FontAwesomeIcon className="hover:text-blue-900 transition" icon={faTwitterSquare}></FontAwesomeIcon>
                <FontAwesomeIcon className="hover:text-blue-900 transition" icon={faLinkedin}></FontAwesomeIcon>
                <FontAwesomeIcon className="hover:text-blue-900 transition" icon={faGooglePlusSquare}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Instructor;