import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import ArchComponent from '../Layouts/archComponent.js';
import FeaturedImages from '../Layouts/featuredImages.js';
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
import vitelliBlog from '../Assets/Images/Vitelli Doomboh Leggings - Blog.jpeg'
import ANDREJ from '../Assets/Images/ANDREJ GRONAU .jpeg'
import Charlie from '../Assets/Images/Charlie Costantinou.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import '../Assets/css/blogcss.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ResponsiveNav from '../Layouts/responsiveNav.js';
function BlogPage() {
    return (
        <div className="homePage">
            {/* <Nav /> */}
            <ResponsiveNav/>
            <h4>EXPLORE THE WORLD OF POWER PERSONALIZATION</h4>
            <img id="topBlogPage" src="https://media.istockphoto.com/videos/crowd-of-people-commuters-walking-at-shibuya-crossing-video-id1167927700?b=1&k=20&m=1167927700&s=640x640&h=Zx7VE1nSoF3Rle4J6tJpsLrNZVexJKf7i9vucwgZjKY=" alt="" />
            <h4>MEET THE ARCHETYPES</h4>
            {/* Make this a seperate component */}
            <Swiper
                // install Swiper modules
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{ delay: 5000 }}
            >
                <SwiperSlide>
                    <div id='archetypes-grid' className='container '>
                        <div className='row gx-0 gy-0'>
                            <ArchComponent img={Creator} title="The Creator" />
                            <ArchComponent img={Hero} title="The Hero" />
                            <ArchComponent img={Explorer} title="The Explorer" />
                        </div>
                        <div className='row gx-0 gy-0' id='bottomArch'>
                            <ArchComponent img={Innocent} title="The Innocent" />
                            <ArchComponent img={Outlaw} title="The Outlaw" />
                            <ArchComponent img={Ruler} title="The Ruler" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='archetypes-grid' className='container '>
                        <div className='row gx-0 gy-0'>
                            <ArchComponent img={Creator} title="The Creator" />
                            <ArchComponent img={Hero} title="The Hero" />
                            <ArchComponent img={Explorer} title="The Explorer" />
                        </div>
                        <div className='row gx-0 gy-0' id='bottomArch'>
                            <ArchComponent img={Innocent} title="The Innocent" />
                            <ArchComponent img={Outlaw} title="The Outlaw" />
                            <ArchComponent img={Ruler} title="The Ruler" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <br />
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{ delay: 6500 }}
            >
                <SwiperSlide>
                    <div className='d-flex flex-row justify-content-center' id='featuredContainer'>
                        <div id='featuredText'>
                            <h2>FEATURED</h2>
                            <p>Shop products from our editorials if you haven't taken the test yet!</p>
                            <div>
                                See all editorial products
                            </div>
                        </div>
                        <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                            <FeaturedImages image={vitelliBlog} />
                            <FeaturedImages image={ANDREJ} />
                            <FeaturedImages image={Charlie} />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='d-flex flex-row justify-content-center' id='featuredContainer'>
                        <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                            <FeaturedImages image={vitelliBlog} />
                            <FeaturedImages image={ANDREJ} />
                            <FeaturedImages image={Charlie} />
                            <FeaturedImages image={Zankov} />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
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
            <div id='paddingAd'>
                <TestAd />
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default BlogPage;