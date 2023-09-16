import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    return (
        <header className="mx-auto mt-7">
            <ToastContainer />
            <h1 className="text-4xl mb-7 font-bold text-black">Course Registration</h1>
        </header>
    );
};

export default Header;