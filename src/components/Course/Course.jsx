import PropTypes from 'prop-types';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Course = ({ course,setTitle, titleArray, totalCredit, setTotalCredit, totalPrice, setTotalPrice, totalRemaining, setTotalRemaining}) => {
    const { course_img, title, description, price, credit_time } = course;


    const handleAddSelect = () => {

        const isExist = titleArray.find((titleValue) => titleValue == title)

        if (!isExist) {
            //total credit time calculation
            totalCredit = totalCredit + credit_time;   
            
            //remaining value calculation
            totalRemaining = totalRemaining - credit_time;
            // console.log(totalRemaining);

            //total price calculation
            totalPrice = totalPrice + price; 

            if (totalCredit > 20 && totalRemaining < 0) {
                toast('You can not add more course');
            } else {
                setTotalCredit(totalCredit);
                setTotalRemaining(totalRemaining);
                //title Display
                const newArray = [...titleArray, title];
                setTitle(newArray);
                setTotalPrice(totalPrice);
            }                
        } 
    };


    return (         
            <div className='bg-white w-full h-full rounded-xl p-4'>
                <div className=''>
                    <img className='mx-auto' src={course_img} alt="" />
                    <h3 className='font-semibold text-base lg:text-left my-4'>{title}</h3>
                    <p className='font-normal ml-8 md:ml-0 lg:ml-0 w-4/5 md:w-full lg:w-full text-justify h-28 text-sm mb-5 text-slate-500'>{description}</p>
                </div>
            
                <div className='flex justify-evenly md:mt-20 lg:mt-0 lg:justify-between items-center font-medium text-slate-500'>
                    <FaDollarSign />
                    <p>Price: {price}</p>
                    <FaBookOpen />
                    <p>Credit: {credit_time}hr</p>
                </div>
                <button onClick={() => handleAddSelect()} className='btn text-white rounded-lg mt-5 py-2 bg-[#2F80ED] w-full '>Select</button>
            
            </div>      
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    setTitle: PropTypes.func,
    titleArray: PropTypes.array,
    setTotalCredit: PropTypes.func,
    totalCredit: PropTypes.number,
    setTotalPrice: PropTypes.func,
    totalPrice: PropTypes.number,
    totalRemaining: PropTypes.number,
    setTotalRemaining: PropTypes.func
}


export default Course;