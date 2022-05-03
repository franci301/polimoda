import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import Creator from '../Assets/Images/Meet the Archetypes - Creator.jpg';
import Explorer from '../Assets/Images/Meet the Archetypes - Explorer.jpg';
import Hero from '../Assets/Images/Meet the Archetypes - Hero.jpg';
import Innocent from '../Assets/Images/Meet the Archetypes - Innocent.jpg';
import Outlaw from '../Assets/Images/Meet the Archetypes - Outlaw.jpeg';
import Ruler from '../Assets/Images/Meet the Archetypes - Ruler.jpg';
import bottomImg2 from '../Assets/Images/Meet Palomo Spain.png';
import bottomImg1 from '../Assets/Images/BE A MAGICIAN JUST LIKE VITELLI.jpeg'
import Zankov from '../Assets/Images/Zankov (ZEKE).jpeg'
import lowClassic from '../Assets/Images/Low Classic (UNBALANCE DRESS - LIGHT BEIGE).jpeg'
import Minjukim from '../Assets/Images/Minjukim.png'
import { useNavigate } from 'react-router-dom';
import '../Assets/css/blogcss.css'

function BlogPage() {
    const navigate = useNavigate();

    function route(props) {
        navigate('/ProductPage/*', { state: { img: props } });
    }

    return (
        <div className="homePage">
            <Nav />
            <br />
            <h4>EXPLORE THE WORLD OF POWER AND PERSONALIZATION</h4>
            <br />
            <img id="topBlogPage" src="https://media.istockphoto.com/videos/crowd-of-people-commuters-walking-at-shibuya-crossing-video-id1167927700?b=1&k=20&m=1167927700&s=640x640&h=Zx7VE1nSoF3Rle4J6tJpsLrNZVexJKf7i9vucwgZjKY=" alt="" />
            <br />
            <h4>MEET THE ARCHETYPES</h4>
            <br />
            <div id='archetypes-grid' className='container '>
                <div className='row gx-0 gy-0'>
                    <div className='col'>
                        <img src={Creator} alt="" />
                        <h5>The Creator</h5>
                    </div>
                    <div className='col'>
                        <img src={Hero} alt="" />
                        <h5>The Hero</h5>
                    </div>
                    <div className='col'>
                        <img src={Explorer} alt="" />
                        <h5>The Explorer</h5>
                    </div>
                </div>
                <div className='row gx-0 gy-0' id='bottomArch'>
                    <div className='col'>
                        <img src={Innocent} alt="" />
                        <h5>The Innocent</h5>
                    </div>
                    <div className='col'>
                        <img src={Outlaw} alt="" />
                        <h5>The Outlaw</h5>
                    </div>
                    <div className='col'>
                        <img src={Ruler} alt="" />
                        <h5>The Ruler</h5>
                    </div>
                </div>
            </div>
            <br />
            <div className='d-flex flex-row justify-content-center' id='featuredContainer'>
                <div id='featuredText'>
                    <h2>FEATURED</h2>
                    <p>Shop products from our editorials if you haven't taken the test yet!</p>
                    <div>
                        See all editorial products
                    </div>
                </div>
                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                    <div>
                        <img id='featuredImg' src={Zankov} alt="" onClick={() => route(Zankov)} />
                        <div>
                            <h4>Description</h4>
                            <p>price</p>
                        </div>
                    </div>
                    <div>
                        <img id='featuredImg' src={lowClassic} alt="" onClick={() => route(lowClassic)} />
                        <div>
                            <h4>Description</h4>
                            <p>price</p>
                        </div>
                    </div>
                    <div>
                        <img id='featuredImg' src={Minjukim} alt="" onClick={() => route(Minjukim)} />
                        <div>
                            <h4>Description</h4>
                            <p>price</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container' id="descriptionsContainer">
                <div id="bottomContainer" className='row '>
                    <div className='col px-0 py-0'>
                        <img src={bottomImg1} alt="" id="bottomContainerImg" />
                        <div id="bottomContainerText1">
                            <p>Description</p>
                            <p> Written by Name</p>
                        </div>
                    </div>
                    <div className='col px-0 py-0'>
                        <img src={bottomImg2} alt="" id="bottomContainerImg" />
                        <div id="bottomContainerText2">
                            <p>Description</p>
                            <p> Written by Name</p>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <TestAd />
            <br />
            <Footer />
        </div>
    );
}

export default BlogPage;