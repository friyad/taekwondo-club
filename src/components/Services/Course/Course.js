import React from 'react';
import { useState } from 'react/cjs/react.development';

const Course = (props) => {
    const [readMore, setReadMore] = useState(false)
    const { name, price, instructorName, img, description } = props.course;

    return (
        <div className="border-4 rounded-xl shadow-xl">
            <img src={img} className="w-full h-80 rounded-t-xl" alt="" />
            <h1 className="text-4xl font-bold my-2">{name}</h1>
            <h2 className="text-lg font-bold">Instructor: {instructorName}</h2>
            <p className="px-8 mt-4 text-justify">{description.slice(0, 200)}
                {readMore && description.slice(200, description.length)}  </p>

            <button className="text-blue-700" onClick={() => setReadMore(!readMore)}>
                {!readMore ? <span>Read More...</span> : <span>...Read Less</span>}
            </button>

            <h1 className="text-3xl font-bold my-2">Price: {price}</h1>
        </div>
    );
};

export default Course;