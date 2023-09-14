import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';

const Course = ({ course }) => {
    const { course_img, title, description, price, credit_time } = course;
    return (
        <div className=''>
           

            
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
                <button className='btn text-white rounded-lg mt-5 py-2 bg-sky-600 w-full '>Select</button>
            </div>

            
            
        </div>
    );
};


Course.propTypes = {
    course: PropTypes.object.isRequired,
}


export default Course;