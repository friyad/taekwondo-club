import React from 'react';

const NotFound = () => {
    return (
        <div className="mt-56 mb-72">
            <span className="text-9xl text-blue-800 font-bold">4</span>
            <span className="text-7xl font-bold text-yellow-700">0</span>
            <span className="text-9xl text-blue-800 font-bold">4</span>
            <hr className="border-2 rounded-full border-blue-900 w-2/12 mx-auto" />
            <h1 className="text-5xl font-bold tracking-wider">Not <span className="text-yellow-700">Found</span></h1>
            <p className="mt-5 tracking-widest text-red-600 font-semibold">We can not found your searching page. Please go to home and try again letter.</p>
        </div>
    );
};

export default NotFound;