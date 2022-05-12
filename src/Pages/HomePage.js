import { useNavigate } from 'react-router-dom';
import HomeNav from '../Layouts/HomeNav';
import Footer from '../Layouts/footer';
import '../Assets/css/home.css';
import duck from '../Assets/Images/duck.jpg';
// import '../Assets/css/footer.css';


function HomePage() {
    const navigate = useNavigate();
    function routeTest() {
        navigate('/Test/*');
    }
    function routeBlog() {
        navigate('/Blog/*')
    }
    return (
        <div>
            <HomeNav />
            {/* d-flex flex-column 
                justify-content-between */}
            <div className="container min-vh-100 gx-0" id='homeContainer'>
                <div className="container">
                    <div className="row">
                        <div className="col" id="leftImg">
                            <img id="left-home-img" src="https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlJTIwd2Fsa2luZ3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
                            <button id='testButton' onClick={routeTest}>Start Archetypes of Power Discovery</button>
                            <p id='testTxt'>Get your personalized product offering upon completing a Jungian Archetypes inspired personality test.</p>
                        </div>
                        <div className="col" id="rightImg">
                            <h6 id='archStories'>Arcehtypal Stories</h6>
                            <button id="exploreButton" onClick={routeBlog}>Explore XXX</button>
                            <div className="d-flex flex-row gap-3 py-3" id='rightImgContainer'>
                                <img src={duck} alt="" />
                                <img src={duck} alt="" />
                            </div>
                            <p id='archStories'>Feel pursuaded by the archetypal narrative to reach power personalization.</p>
                        </div>
                    </div> 
                </div>
            </div>
            {/* <div id='footerTest'> */}
            <Footer />
            {/* </div> */}
        </div>
    );
}

export default HomePage;