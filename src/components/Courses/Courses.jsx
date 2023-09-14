import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = () => {
   
    const [courses, setCourses] = useState([]);
   
    const [titleArray, setTitle] = useState([]);
    console.log(titleArray);

    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])

    return (
        <div className="flex">
            <div className="md:w-3/4 drop-shadow-md p-2">
            {/* <h1>Courses: {courses.length}</h1> */}        
                <div className="grid grid-cols-3 gap-5"> {/* card container */}        
                    {
                        courses.map(course => <Course key={course.id} course={course} setTitle={setTitle} titleArray={titleArray}
                        ></Course>)
                    }     
                </div>    
            </div>

            <div className="bg-amber-800 w-1/4">
                <h1>Credit Hour Remaining hr</h1>
                <hr />
                <h3>Course Name</h3>
                
                    
                
                <hr />

                <p>Total Credit Hour: </p>
                <hr />
                <p>Total Price: </p>
            </div>
        </div>
        
        
    );
};

export default Courses;