
import Footer from '../component/Footer';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';


const HomeLayout = () => {

    


    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;