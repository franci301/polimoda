import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import ResponsiveNav from '../Layouts/responsiveNav.js';
import ArchComponent from '../Layouts/archComponent.js';
import FeaturedImages from '../Layouts/featuredImages.js';
import Creator from '../Assets/Images/The Creator.jpg';
import Explorer from '../Assets/Images/The Explorer.jpg';
import Hero from '../Assets/Images/The Hero.jpg';
import Innocent from '../Assets/Images/The Innocent.jpg';
import Outlaw from '../Assets/Images/The Outlaw.jpg';
import Ruler from '../Assets/Images/The Ruler.jpg';
import Caregiver from '../Assets/Images/The Caregiver.jpg';
import Everyman from '../Assets/Images/The Everyman.jpg';
import Jester from '../Assets/Images/The Jester.jpg';
import Magician from '../Assets/Images/The Magician.jpg';
import Sage from '../Assets/Images/The Sage.jpg';
import Lover from '../Assets/Images/The Lover.jpg';
import bottomImg2 from '../Assets/Images/Meet Palomo Spain.png';
import bottomImg1 from '../Assets/Images/BE A MAGICIAN JUST LIKE VITELLI.jpeg'
import Arlington from '../Assets/Images/product-featured/PRODUCT FEATURED - 16Arlington (Pendal Feather Top) 1095€.webp'
import AVAVAV from '../Assets/Images/product-featured/PRODUCT FEATURED - AVAVAV (Puff Dress Turquoise Purple Acqua) 500€.webp'
import Andrej from '../Assets/Images/product-featured/PRODUCT FEATURED - Andrej Gronau (Exclusive Multicolor Check Lurex Dress) 1080€.jpeg'
import BODE from '../Assets/Images/product-featured/PRODUCT FEATURED - BODE New York (Hand-stitched Fleurette Long Sleeves Shirt) 685€.webp'
import Charlie from '../Assets/Images/product-featured/PRODUCT FEATURED - Charlie Constantinou (Expandable Quilted Duffel Bag) 800€.png'
import Kusikoch from '../Assets/Images/product-featured/PRODUCT FEATURED - Kusikoch (Nylon Trouser Red) 490€.webp'
import Limi from '../Assets/Images/product-featured/PRODUCT FEATURED - Limi Feu (Chiffon B Dress With Vest) 700€.jpg'
import Uma from '../Assets/Images/product-featured/PRODUCT FEATURED - Uma Wang (Floral Single Breasted Blazer) 1720€.webp'
import Vitelli from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg'
import Vitelli1 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg(1).jpeg'
import Vitelli2 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg(2).jpeg'
import Vitelli3 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/blogcss.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function BlogPage() {

    const [size, setSize] = useState(0);
    // sets the size of the screen to a variable
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    const navigate = useNavigate();
    function route() {
        navigate('/ProductPage/*', { state: { imgs: { Vitelli, Vitelli1, Vitelli2, Vitelli3 } } });
    }

    function route2(name){
        navigate('/'+name+'/*');
    }

    return (
        <div className="homePage">
            {/* <Nav /> */}
            <ResponsiveNav />
            <h4>EXPLORE THE WORLD OF POWER PERSONALIZATION</h4>
            <iframe id='topBlogPage' width="560" height="315" src="https://www.youtube.com/embed/uEMfQZjswu4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            {/* <img id="topBlogPage" src="https://media.istockphoto.com/videos/crowd-of-people-commuters-walking-at-shibuya-crossing-video-id1167927700?b=1&k=20&m=1167927700&s=640x640&h=Zx7VE1nSoF3Rle4J6tJpsLrNZVexJKf7i9vucwgZjKY=" alt="" /> */}
            <h4>MEET THE ARCHETYPES</h4>
            <Swiper id='arch-swiper'
                modules={[Navigation, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ clickable: true }}
                autoplay={{ delay: 5000 }}
            >
                <SwiperSlide>
                    <div id='archetypes-grid' className='container '>
                        <div className='row gx-0 gy-0'>
                            <ArchComponent img={Creator} title="The Creator" />
                            <ArchComponent img={Magician} title="The Magician" />
                            <ArchComponent img={Explorer} title="The Explorer" />
                        </div>
                        <div className='row gx-0 gy-0' id='bottomArch'>
                            <ArchComponent img={Lover} title="The Lover" />
                            <ArchComponent img={Hero} title="The Hero" />
                            <ArchComponent img={Ruler} title="The Ruler" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id='archetypes-grid' className='container '>
                        <div className='row gx-0 gy-0'>
                            <ArchComponent img={Innocent} title="The Innocent" />
                            <ArchComponent img={Jester} title="The Jester" />
                            <ArchComponent img={Outlaw} title="The Outlaw" />
                        </div>
                        <div className='row gx-0 gy-0' id='bottomArch'>
                            <ArchComponent img={Sage} title="The Sage" />
                            <ArchComponent img={Caregiver} title="The Caregiver" />
                            <ArchComponent img={Everyman} title="The Everyman" />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <br />
            {size <= 700 ? (
                <Swiper
                    id='featured-swiper'
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{ clickable: true }}
                // autoplay={{ delay: 6500 }}
                >
                    {size <= 414 ? (
                        <>
                            <SwiperSlide>
                                <div className='d-flex flex-row justify-content-center' id='featuredContainer'>
                                    <div id='featuredText'>
                                        <h2>FEATURED</h2>
                                        <p>Shop products from our editorials if you haven't taken the test yet!</p>
                                        <div>
                                            See all editorial products
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <div>
                                        <img src={Vitelli} alt="" onClick={route} className='vitelli-single'/>
                                        <div id='featuredTxt'>
                                            <h4>Vitelli</h4>
                                            <p>Doombag Leggings Pluto</p>
                                            <p>420€</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Arlington} brand={'16Arlington'} description={'Pendal Feather Top'} price={'1095€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={AVAVAV} brand={'AVAVAV'} description={'Puff Dress Turquoise Purple Acqua'} price={'500€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center andrej-single'>
                                    <FeaturedImages className='' image={Andrej} brand={'Andrej Gronau'} description={'Exclusive Multicolor Check Lurex Dress'} price={'1080€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={BODE} brand={'BODE New York'} description={'Hand-stiched Fleurette Long Sleeves Shirt'} price={'685€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Charlie} brand={'Charlie Constantinou'} description={'Expandable Quilted Duffel Bag'} price={'800€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Kusikoch} brand={'Kusikoch'} description={'Nylon Trouser Red'} price={'490€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Limi} brand={'Limi Feu'} description={'Chiffon B Dress With Vest'} price={'700€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Uma} brand={'Uma Wang'} description={'Floral Single Breasted Blazer'} price={'1720€'} />
                                </div>
                            </SwiperSlide>
                        </>
                    ) : (
                        <>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <div id='featuredText'>
                                        <h2>FEATURED</h2>
                                        <p>Shop products from our editorials if you haven't taken the test yet!</p>
                                        <div>
                                            See all editorial products
                                        </div>
                                    </div>
                                    <div>
                                        <img id='featuredImg' src={Vitelli} alt="" onClick={route} />
                                        <div id='featuredTxt'>
                                            <h4>Vitelli</h4>
                                            <p>Doombag Leggings Pluto</p>
                                            <p>420€</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Arlington} brand={'16Arlington'} description={'Pendal Feather Top'} price={'1095€'} />
                                    <FeaturedImages image={AVAVAV} brand={'AVAVAV'} description={'Puff Dress Turquoise Purple Acqua'} price={'500€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Andrej} brand={'Andrej Gronau'} description={'Exclusive Multicolor Check Lurex Dress'} price={'1080€'} />
                                    <FeaturedImages image={BODE} brand={'BODE New York'} description={'Hand-stiched Fleurette Long Sleeves Shirt'} price={'685€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Charlie} brand={'Charlie Constantinou'} description={'Expandable Quilted Duffel Bag'} price={'800€'} />
                                    <FeaturedImages image={Kusikoch} brand={'Kusikoch'} description={'Nylon Trouser Red'} price={'490€'} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                    <FeaturedImages image={Limi} brand={'Limi Feu'} description={'Chiffon B Dress With Vest'} price={'700€'} />
                                    <FeaturedImages image={Uma} brand={'Uma Wang'} description={'Floral Single Breasted Blazer'} price={'1720€'} />
                                </div>
                            </SwiperSlide>
                        </>
                    )}
                </Swiper>

            ) : (
                <Swiper
                    id='featured-swiper'
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{ clickable: true }}
                    autoplay={{ delay: 6500 }}>
                    <SwiperSlide>
                        <div className='d-flex flex-row justify-content-center' id='featuredContainer'>
                            <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                <div id='featuredText'>
                                    <h2>FEATURED</h2>
                                    <p>Shop products from our editorials if you haven't taken the test yet!</p>
                                    <div>
                                        See all editorial products
                                    </div>
                                </div>
                                <div>
                                    <img id='featuredImg' src={Vitelli} alt="" onClick={route} />
                                    <div id='featuredTxt'>
                                        <h4>Vitelli</h4>
                                        <p>Doombag Leggings Pluto</p>
                                        <p>420€</p>
                                    </div>
                                </div>
                                <FeaturedImages image={Arlington} brand={'16Arlington'} description={'Pendal Feather Top'} price={'1095€'} />
                                <FeaturedImages image={AVAVAV} brand={'AVAVAV'} description={'Puff Dress Turquoise Purple Acqua'} price={'500€'} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex flex-row justify-content-center' id='featuredContainer'>
                            <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                <FeaturedImages image={Andrej} brand={'Andrej Gronau'} description={'Exclusive Multicolor Check Lurex Dress'} price={'1080€'} />
                                <FeaturedImages image={BODE} brand={'BODE New York'} description={'Hand-stiched Fleurette Long Sleeves Shirt'} price={'685€'} />
                                <FeaturedImages image={Charlie} brand={'Charlie Constantinou'} description={'Expandable Quilted Duffel Bag'} price={'800€'} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex flex-row justify-content-center' id='featuredContainer'>
                            <div id='featuredImgContainer' className='d-flex flex-row justify-content-center'>
                                <FeaturedImages image={Kusikoch} brand={'Kusikoch'} description={'Nylon Trouser Red'} price={'490€'} />
                                <FeaturedImages image={Limi} brand={'Limi Feu'} description={'Chiffon B Dress With Vest'} price={'700€'} />
                                <FeaturedImages image={Uma} brand={'Uma Wang'} description={'Floral Single Breasted Blazer'} price={'1720€'} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}

            <div className='container' id="descriptionsContainer">
                <div id="bottomContainer" className='row '>
                    <div className='col px-0 py-0'>
                        <img src={bottomImg2} alt="" id="bottomContainerImg" onClick={()=>route2('PamoloPage')}/>
                        <div id="bottomContainerText1">
                            <p>INTERVIEW WITH ALEJANDRO GÓMEZ PALOMO</p>
                            <p>ANGELA DI PEDE</p>
                        </div>
                    </div>
                    <div className='col px-0 py-0'>
                        <img src={bottomImg1} alt="" id="bottomContainerImg" onClick={()=>route2('VitelliPage')}/>
                        <div id="bottomContainerText2">
                            <p>BE A MAGICIAN JUST LIKE VITELLI</p>
                            <p>ANGELA DI PEDE</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div id='paddingAd'> */}
                <TestAd />
            {/* </div> */}
            <br />
            <Footer />
        </div>
    );
}

export default BlogPage;