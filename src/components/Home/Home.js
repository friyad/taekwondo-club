import React from 'react';
import Course from './Course/Course';
import './Home.css';
import Instructor from './Instructor/Instructor';
import useAllCourses from '../../Hook/useAllCourses';
import useAllInstructor from '../../Hook/useAllInstructor';
import capusImage from '../../images/campus-image.jpg'
import homeBg from '../../images/home-background.jpg'

const Home = () => {
    const [allInstructor, setAllInstructor] = useAllInstructor()
    const [allCourses, setAllCourses] = useAllCourses()

    return (
        <div className="home">
            {/* image and Get started button start here-------------- */}
            <div className="bg-black relative z-0 text-center">
                <img src={homeBg} className="w-full h-full opacity-30" alt="" />

                <div className="text-center lg:w-full absolute top-7">
                    <h1 className="text-white md:pt-20 lg:pt-32 xl:pt-60 pt-2 text-xl md:text-3xl lg:text-5xl xl:text-5xl font-semibold " >Learn TAEKWONDO with our Taekwondo Club</h1>
                    <h1 className="text-white text-lg md:text-2xl lg:text-4xl lg:mt-2 font-mono font-thin  lg:leading-loose">More than 50+ courses</h1>
                    <button className="bg-yellow-400 font-semibold hover:bg-blue-800 hover:text-white transition text-xl py-1 px-6 mt-2 md:py-3 md:px-8 lg:py-4 lg:px-14 rounded-md">Get started</button>
                </div>
            </div>

            {/* Our courses Section start here--------------- */}
            <div className="xl:mt-8 lg:mt-16 md:mt-28 xs:mt-14 bg-white w-10/12 mx-auto rounded-xl py-3 shadow-lg z-10">
                <h1 className="text-4xl text-black font-bold text-blue-900">Our Courses</h1>
                <div className="flex w-3/12 mt-1 mx-auto ">
                    <hr className="border-2 border-blue-900 mx-auto w-5/12 rounded-xl" />
                    <hr className="border-2 border-blue-900 mx-auto w-1/12 rounded-xl" />
                    <hr className="border-2 border-blue-900 mx-auto w-5/12 rounded-xl" />
                </div>
                <div className="grid lg:grid-cols-3 xs:grid-cols-1 md:grid-cols-2 gap-10 xs:w-full md:w-11/12 pb-5 pt-8 mx-auto">
                    {
                        allCourses.slice(0, 6).map(course => <Course
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>

            {/* Our instructor Section start here */}
            <div className="text-left w-10/12 mx-auto mt-24">
                <h1 className="xs:text-2xl lg:text-4xl text-blue-900 font-bold">Our Skilled Instructors</h1>
                <div className="flex lg:w-96 mt-1">
                    <hr className="border-2 border-blue-900 mx-auto w-5/12 rounded-xl" />
                    <hr className="border-2 border-blue-900 mx-auto w-1/12 rounded-xl" />
                    <hr className="border-2 border-blue-900 mx-auto w-5/12 rounded-xl" />
                </div>
                <div className="grid xs:grid-cols-1 lg:grid-cols-5 mt-8 gap-y-10 gap-x-10">
                    {
                        allInstructor.map(instructor => <Instructor
                            instructor={instructor}
                        />)
                    }
                </div>
            </div>

            {/* Our Campus Start here */}
            <div className="our-campus mt-28 flex justify-left items-center bg-black relative">
                <img src={capusImage} alt="" className="w-full h-full opacity-40" />
                <div className="absolute">
                    <h1 className="text-white text-2xl xl:text-6xl text-center mx-auto w-10/12">Welcome to Our Campus</h1>
                    <p className="text-white xs:text-center xs:hidden lg:block mt-3 mx-auto w-6/12">Lorem ipsum dolor sit amet consectetur adipisicing elit.Sunt asperiores officia ad cupiditate nostrum cum  officia ad cupiditate nostrum cum aperiam culpa quis, vitae adipisci assumenda dicta reiciendis debitis non error tenetur animi itaque rerum?</p>
                </div>
            </div>
        </div>
    );
};

export default Home;