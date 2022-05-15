import { useNavigate } from 'react-router-dom';
import HomeNav from '../Layouts/HomeNav';
import Footer from '../Layouts/footer';
import duck from '../Assets/Images/duck.jpg';
import testImg from '../Assets/Images/Homepage.jpeg';
import homeBlog from '../Assets/Images/Homepage  Blog2.jpg';
import '../Assets/css/home.css';


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
            <div className="container vh-100 gx-0" id='homeContainer'>
                <div className="container">
                    <div className="row">
                        <div className="col" id="leftImg">
                            <img id="left-home-img" src={testImg} alt="" />
                            <button id='testButton' onClick={routeTest}>Start Archetypes of Power Discovery</button>
                            <p id='testTxt'>Get your personalized product offering upon completing a Jungian Archetypes inspired personality test.</p>
                        </div>
                        <div className="col" id="rightImg">
                            <h6 id='archStories'>Arcehtypal Stories</h6>
                            <button id="exploreButton" onClick={routeBlog}>Be your own source of inspiration</button>
                            <div className="d-flex flex-row gap-3 py-3" id='rightImgContainer'>
                                <img src={homeBlog} alt="" />
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