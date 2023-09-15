import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = () => {
   
    const [courses, setCourses] = useState([]);
    const [titleArray, setTitle] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalRemaining, setTotalRemaining] = useState(0);


    useEffect(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    },[])

    return (
        <div className="flex">
            <div className="md:w-3/4 drop-shadow-md mx-2">
            {/* <h1>Courses: {courses.length}</h1> */}        
                <div className="grid grid-cols-3 gap-5"> {/* card container */}        
                    {
                        courses.map(course => <Course key={course.id}
                            course={course}
                            setTitle={setTitle}
                            titleArray={titleArray}
                            coursesArray={courses}
                            setTotalCredit={setTotalCredit}
                            totalCredit={totalCredit}
                            totalPrice={totalPrice}
                            setTotalPrice={setTotalPrice}
                            totalRemaining={totalRemaining} setTotalRemaining={setTotalRemaining}
                        ></Course>)
                    }     
                </div>    
            </div>

            <div className="bg-white rounded-xl drop-shadow-md p-6 h-fit w-1/4">
                <h1 className="text-[#2F80ED] text-lg font-bold text-left">Credit Hour Remaining {20} hr</h1>
                <hr className="my-5" />
                <h3 className="text-xl font-bold">Course Name</h3>

                <ol className="text-slate-500 leading-7 mt-4 mb-6">


                     {
                        titleArray.map((title,idx) => <li className="list-decimal list-inside text-left" key={idx}>{title}</li>)
                    } 
                </ol>

                
                
                <hr />

                <p className="my-4 text-left">Total Credit Hour: {totalCredit}</p>
                <hr />
                <p className="my-4 text-left">Total Price: {totalPrice} USD</p>
            </div>
        </div>
        
        
    );
};

export default Courses;