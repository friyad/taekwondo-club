import { useEffect, useState } from "react";

const useAllCourses = () => {
    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch('./CoursesData.JSON')
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])

    return [allCourses, setAllCourses]
};

export default useAllCourses;