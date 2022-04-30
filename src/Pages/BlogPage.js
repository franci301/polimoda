import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import '../Assets/css/blogcss.css'
import duck from '../Assets/Images/duck.jpg';
import { Link } from 'react-router-dom';


function BlogPage() {
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
            <div id='archetypes-grid' className='d-flex flex-row justify-content-center'>
                <div>
                    <div>
                        <img src={duck} alt="" />
                    </div>
                    <div>
                        <img src={duck} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={duck} alt="" />
                    </div>
                    <div>
                        <img src={duck} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={duck} alt="" />
                    </div>
                    <div>
                        <img src={duck} alt="" />
                    </div>
                </div>
            </div>
            <br />
            <div className='d-flex flex-row justify-content-center'>
                <div className=''>
                    <h2>FEATURED</h2>
                    <p>Shop products from our editorials if you haven't taken the test yet!</p>
                    <div>
                        See all editorial products
                    </div>
                </div>
                <div>
                    <img id='featuredImg' src={duck} alt="" />
                    <div>
                        <h4>Description</h4>
                        <p>price</p>
                    </div>
                </div>
                <div>
                    <Link to='/ShopPage/*'> <img id='featuredImg' src={duck} alt="" /></Link>
                    <div>
                        <h4>Description</h4>
                        <p>price</p>
                    </div>
                </div>
                <div>
                    <Link to='/ProductPage/*'> <img id='featuredImg' src={duck} alt="" /></Link>
                    <div>
                        <h4>Description</h4>
                        <p>price</p>
                    </div>
                </div>
            </div>
            <div className='d-flex flex-row justify-content-center pb-2' id="descriptionsContainer">
                <div id="bottomContainer">
                    <img src={duck} alt="" id="bottomContainerImg"/>
                    <div id="bottomContainerText">
                        <p>Description</p>
                        <p> Written by Name</p>
                    </div>
                </div>
                <div id="bottomContainer">
                    <img src={duck} alt="" id="bottomContainerImg" />
                    <div id='bottomContainerText'>
                        <p>Description</p>
                        <p>Written by Name</p>
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