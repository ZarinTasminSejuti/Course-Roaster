import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = () => {
    
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])

    return (
        <div className="md:w-3/4 drop-shadow-md p-2">
            {/* <h1>Courses: {courses.length}</h1> */}

            
            <div className="grid grid-cols-3 gap-5"> {/* card container */}
          
                    {
                        courses.map(course => <Course key={course.id} course={course}></Course>)
                    }
                
            </div>
            
        </div>
    );
};

export default Courses;