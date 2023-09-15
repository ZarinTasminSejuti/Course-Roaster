import PropTypes from 'prop-types';
// import { useState } from 'react';
// import { useState } from 'react';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';


const Course = ({ course,setTitle, titleArray }) => {
    const { course_img, title, description, price, credit_time } = course;

     //for total credit Hour
    // const [totalCredit, SetTotalCredit] = useState(0);

    // const handleTotalCredit = () => {
    //     let totalCredit = 0;
    //     for (const total of course) {
    //         totalCredit += total.credit_time;
    //     }
    //     SetTotalCredit(totalCredit);
    // }
    

    const handleAddSelect = () => {
        const newArray = [...titleArray, title];
        setTitle(newArray);
        
    }


    return (
        
       
            <div className='bg-white w-full h-full rounded-xl p-4'>
                <div className=''>
                <img src={course_img} alt="" />
                <h3 className='font-semibold text-base text-left my-4'>{title}</h3>
                <p className='font-normal text-justify h-28 text-sm mb-5 text-slate-500'>{description}</p>
                </div>
                <div className='flex justify-between items-center font-medium text-slate-500'>
                    <FaDollarSign />
                    <p>Price: {price}</p>
                    <FaBookOpen />
                    <p>Credit: {credit_time}hr</p>
                </div>
                <button onClick={handleAddSelect}  className='btn text-white rounded-lg mt-5 py-2 bg-[#2F80ED] w-full '>Select</button>
            </div>

            
            
       
    );
};


Course.propTypes = {
    course: PropTypes.object.isRequired,
    setTitle: PropTypes.func,
    titleArray: PropTypes.array
}


export default Course;