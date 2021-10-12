import { useEffect } from "react";
import { useState } from "react/cjs/react.development";


const useAllInstructor = () => {
    const [allInstructor, setAllInstructor] = useState([])

    useEffect(() => {
        fetch('./Instructor.JSON')
            .then(res => res.json())
            .then(data => setAllInstructor(data))
    }, [])

    return [allInstructor, setAllInstructor]
};

export default useAllInstructor;