import { useEffect, useState } from "react";


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