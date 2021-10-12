import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/taekwondo-logo.png'
import { faBars, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    const [barClick, setBarClick] = useState(false);

    const activeStyle = {
        borderBottom: '3px solid white',
        paddingBottom: '10px',
        transition: 'ease-out 0.3s',
        color: 'rgb(253, 228, 0)',
        borderColor: 'rgb(253, 228, 0)'
    }


    return (
        <div>
            <nav>
                <div className="lg:hidden flex justify-between items-center no-underline py-3 font-semibold w-11/12 mx-auto">
                    <div className="flex justify-center items-center col-span-3">
                        <img width="50px" src={logo} alt="" />
                        <a className="ml-2 font-bold text-base" href="">Taekwondo Club</a>
                        <p className="ml-3 bg-white text-blue-800 rounded-full text-sm inline-block py-1 px-2 text-left"><FontAwesomeIcon icon={faShoppingCart} /> 0</p>
                    </div>
                    <div>
                        <FontAwesomeIcon onClick={() => setBarClick(!barClick)} icon={faBars} />
                    </div>
                </div>
                <div>
                    {
                        barClick &&
                        <div className="flex flex-col w-5/12 mx-auto" >
                            <NavLink activeStyle={activeStyle}
                                className="mb-4 tracking-wider" to="/home">HOME</NavLink>
                            <NavLink activeStyle={activeStyle}
                                className="mb-4 tracking-wider" to="/service">SERVICES</NavLink>
                            <NavLink activeStyle={activeStyle}
                                className="mb-4 tracking-wider" to="/about">ABOUT</NavLink>
                            <NavLink activeStyle={activeStyle}
                                className="mb-4 tracking-wider" to="/news">NEWS</NavLink>
                            <NavLink activeStyle={activeStyle}
                                className="mb-4 tracking-wider" to="/bestStudents">BEST STUDENTS</NavLink>
                            <button className="bg-yellow-400 mb-5 text-black py-3 px-6 rounded-lg font-semibold tracking-wider join-btn">Join in Club</button>
                        </div>
                    }
                </div>

                <div className="xs:hidden lg:block">
                    <div className="no-underline py-5 font-semibold flex justify-between lg:w-12/12 xl:w-11/12 mx-auto">
                        <div className="flex justify-center items-center">
                            <img width="80px" src={logo} alt="" />
                            <a className="ml-2 font-bold md:text-xl lg:text-2xl" href="">Taekwondo Club</a>
                        </div>
                        <div>
                            <NavLink activeStyle={activeStyle}
                                className="lg:mr-3 xl:mr-14 tracking-wider  hover:text-yellow-300" to="/home">HOME</NavLink>
                            <NavLink activeStyle={activeStyle}
                                className="lg:mr-3 xl:mr-14 tracking-wider hover:text-yellow-300" to="/service">SERVICES</NavLink>
                            <NavLink activeStyle={activeStyle}
                                className="lg:mr-3 xl:mr-14 tracking-wider hover:text-yellow-300" to="/about">ABOUT</NavLink>
                            <NavLink activeStyle={activeStyle}
                                className="lg:mr-3 xl:mr-14 tracking-wider hover:text-yellow-300" to="/news">NEWS</NavLink>
                            <NavLink activeStyle={activeStyle}
                                className="lg:mr-3 xl:mr-14 tracking-wider hover:text-yellow-300" to="/bestStudents">BEST STUDENTS</NavLink>
                            <p className="mr-14 bg-white text-blue-800 rounded-full text-lg inline-block py-1 px-4 text-left"><FontAwesomeIcon icon={faShoppingCart} /> 0</p>
                            <button className="bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold tracking-wider join-btn">Join in Club</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Header;