import React from 'react';
import './Services.css';
import backgroundImage from '../../images/services-bg.png';
import AllCourse from './AllCourse/AllCourse';
import useAllCourses from '../../Hook/useAllCourses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    const [allCourses, setAllCourses] = useAllCourses()

    return (
        <div className="mt-24">
            <div className="h-96 relative bg-black flex justify-center items-center">
                <img src={backgroundImage} className="w-full h-full opacity-30" alt="" />
                <h1 className="text-5xl text-white font-bold absolute">Our All Serivces here</h1>
            </div>

            {/* Devider Style */}
            <div className="grid grid-cols-12 w-8/12 mt-10 mx-auto ">
                <hr className="border-2 border-blue-900 mx-auto col-span-5 w-full rounded-xl" />
                <hr className="border-2 border-blue-900 mx-auto rounded-xl" />
                <hr className="border-2 border-blue-900 mx-auto rounded-xl" />
                <hr className="border-2 border-blue-900 mx-auto col-span-5 w-full rounded-xl" />
            </div>

            {
                allCourses.length === 0 &&
                <h1 className="bg-green-500 inline-block py-2 px-6 rounded-lg text-center text-xl mt-10 lg:mt-32">
                    <FontAwesomeIcon className="animate-spin h-5 w-5 mr-3" icon={faSpinner} />
                    Loading...
                </h1>
            }

            <div className="grid xs:grid-cols-1 lg:grid-cols-3 w-11/12 gap-x-10 gap-y-8 mx-auto mt-14">
                {
                    allCourses.map(course => <AllCourse
                        course={course}
                    />)
                }
            </div>

        </div>
    );
};

export default Services;