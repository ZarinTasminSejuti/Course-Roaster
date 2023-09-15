import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';



const Course = ({ course,setTitle, titleArray,coursesArray , setTotalCredit}) => {
    const { course_img, title, description, price, credit_time } = course;

 

    const handleAddSelect = (coursesArray) => {
       
        const isExist = titleArray.find((titleValue) => titleValue == title)
        // console.log(isExist);
       
        if (!isExist) {

            //total credit time calculation
            let total = credit_time;

            coursesArray.forEach((newCredit) => {
                
                total = total + newCredit.credit_time;

            });
            // console.log(total);


            //remaining value counting
            // const totalRemaining = 20 - total;
            // console.log(totalRemaining);
            setTotalCredit(total);
            const newArray = [...titleArray, title];
            setTitle(newArray);
        } 
    };


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
                <button onClick={()=>handleAddSelect(coursesArray, setTotalCredit)}  className='btn text-white rounded-lg mt-5 py-2 bg-[#2F80ED] w-full '>Select</button>
            </div>

            
            
       
    );
};


Course.propTypes = {
    course: PropTypes.object.isRequired,
    setTitle: PropTypes.func,
    titleArray: PropTypes.array,
    coursesArray: PropTypes.array,
   setTotalCredit: PropTypes.func
}


export default Course;