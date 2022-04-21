import { useNavigate } from 'react-router-dom';
import HomeNav from '../Layouts/HomeNav';
import Footer from '../Layouts/footer';
import '../Assets/css/home.css';


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
                    <div className="col" id="leftImg">
                        <img id="left-home-img" src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwd2Fsa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                        <button className='btn btn-dark'>Start The Test</button>
                    </div>
                    <div className="col" id="rightImg">
                        <p>Sample text goes here</p>
                        <button className='btn btn-dark' onClick={routeChange}>Explore XXX</button>
                    </div>
                </div>
            </div>
            <div id='footer'>
            <Footer />
            </div>
        </div>
    );

}

export default HomePage;