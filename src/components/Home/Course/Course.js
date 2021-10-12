import React from 'react';

const Course = (props) => {
    // console.log(props)
    const { name, price, img, description } = props.course;

    return (
        <div className="max-h-52 rounded-xl text-center flex justify-center items-center relative shadow-lg">
            <img src={img} alt="" className="relative w-full h-full rounded-xl" />

            <h1 className="text-white bg-blue-900 text-2xl absolute left-0 top-0 py-1 px-4 rounded-tl-xl font-semibold">{name}</h1>

            <div className="absolute bg-black opacity-0 hover:opacity-80 transition rounded-xl w-full h-full flex justify-center items-center">
                <div className="border-4 px-5 py-2 bg-opacity-0 hover:opacity-100">
                    <h1 className="text-white text-xl font-semibold">{name}</h1>
                    <h1 className="text-white  text-lg font-semibold">Price: {price}</h1>
                </div>
            </div >
        </div >
    );
};

export default Course;