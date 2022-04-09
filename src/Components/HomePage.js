import '../css/home.css';
import { useNavigate } from 'react-router-dom';
import HomeNav from './HomeNav';
import Footer from './footer';


function HomePage() {
    const navigate = useNavigate();
    function routeChange() {
        console.log('route change');
        navigate('/Blog/*')
    }
    return (
        <div>
            <HomeNav />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6" id="leftImg">
                        <img id="left-home-img" src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwd2Fsa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        left image
                        <button>Start The Test</button>
                    </div>
                    <div className="col-md-6" id="rightImg">
                        <p>Sample text goes here</p>
                        <button onClick={routeChange}>Explore XXX</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );

}

export default HomePage;