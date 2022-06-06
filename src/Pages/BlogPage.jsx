import { useState, useLayoutEffect, useEffect,lazy } from 'react';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import getArchImgs from '../firebase/getArchImgs.js';
import ResponsiveNav from '../Layouts/responsiveNav.js';
import ArchComponent from '../Layouts/archComponent.js';
import FeaturedImages from '../Layouts/featuredImages.js';
import Creator from '../Assets/Images/arch-images/The Creator 1.jpg';
import Explorer from '../Assets/Images/arch-images/The Explorer 1.jpg';
import Hero from '../Assets/Images/arch-images/The Hero 1.jpg';
import Innocent from '../Assets/Images/arch-images/The Innocent.jpg';
import Outlaw from '../Assets/Images/arch-images/The Outlaw.jpg';
import Ruler from '../Assets/Images/arch-images/The Ruler.jpg';
import Caregiver from '../Assets/Images/arch-images/The Caregiver.jpg';
import Everyman from '../Assets/Images/arch-images/The Everyman.jpg';
import Jester from '../Assets/Images/arch-images/The Jester 1.jpg';
import Magician from '../Assets/Images/arch-images/The Magician.jpg';
import Sage from '../Assets/Images/arch-images/The Sage.jpg';
import Lover from '../Assets/Images/arch-images/The Lover.jpg';
import bottomImg2 from '../Assets/Images/blog-images/Meet Palomo Spain.png';
import bottomImg1 from '../Assets/Images/blog-images/BE A MAGICIAN JUST LIKE VITELLI.jpeg'
import Arlington from '../Assets/Images/product-featured/PRODUCT FEATURED - 16Arlington (Pendal Feather Top) 1095€.webp'
import AVAVAV from '../Assets/Images/product-featured/PRODUCT FEATURED - AVAVAV (Puff Dress Turquoise Purple Acqua) 500€.webp'
import Andrej from '../Assets/Images/product-featured/PRODUCT FEATURED - Andrej Gronau (Exclusive Multicolor Check Lurex Dress) 1080€.jpeg'
import BODE from '../Assets/Images/product-featured/PRODUCT FEATURED - BODE New York (Hand-stitched Fleurette Long Sleeves Shirt) 685€.webp'
import Charlie from '../Assets/Images/product-featured/PRODUCT FEATURED - Charlie Constantinou (Expandable Quilted Duffel Bag) 800€.png'
import Kusikoch from '../Assets/Images/product-featured/PRODUCT FEATURED - Kusikoch (Nylon Trouser Red) 490€.webp'
import Limi from '../Assets/Images/product-featured/PRODUCT FEATURED - Limi Feu (Chiffon B Dress With Vest) 700€.jpg'
import Uma from '../Assets/Images/product-featured/PRODUCT FEATURED - Uma Wang (Floral Single Breasted Blazer) 1720€.webp'
import img from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg'
import img1 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg(1).jpeg'
import img2 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg(2).jpeg'
import img3 from '../Assets/Images/product-featured/PRODUCT FEATURED - Vitelli (Doomboh Leggings Pluto) 420€.jpeg.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import { useNavigate } from 'react-router-dom';
import '../Assets/css/blogcss.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
function BlogPage() {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [archArr,setArchArr] = useState([]);
    // sets the size of the screen to a variable
    useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    useEffect(() => {
        let tempArch = []
        getArchImgs().then((res)=>{
            for (let index = 0; index < res.length; index++) {
                tempArch.push([res[index].imgRef])
            }
            setArchArr(tempArch);
        })
    },[])


    const navigate = useNavigate();
    function route() {
        navigate('/ProductPage/*', {
            state: {
                imgs: { img, img1, img2, img3 }, name: 'Vitelli', description: 'Flared felted woven mohair, wool, and silk-blend trousers in multicolor', details: "Through revolutionary fabrics, a cosmic aesthetic, Italian youth culture inspiration and challenging co-labs, Vitelli’s 100% Italian knitwear brand aims to refresh vintage imagery, foster eco-friendly fashion and investigate authentic moments of stile italiano through the filter of the present.", price: '€420', type: 'Multicolor Doomboh Trousers', manufacturingDetails: ['Mid-rise', 'Concealed zip fastening at outseam','Fully lined','20% wool, 20% mohair, 20% polyamide, 20% polyester, 20% silk', ' Made in Italy'], colour:'Pluto'} });
    }

    function route2(name){
        window.location.href = '/' + name;
    }

    // const archArr = [Creator,Explorer,Hero,Innocent,Outlaw,Ruler,Caregiver,Everyman,Jester,Magician,Sage,Lover];
    // async function uploadArch(){
    //     const imgCollectionRef = collection(db, 'arch-images');
    //     for (let i = 0; i < archArr.length; i++) {
    //         await addDoc(imgCollectionRef, {
    //             imgRef:archArr[i]
    //         })
    //     }
    // }

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
                >
                    <SwiperSlide>
                        <div id='archetypes-grid' className='container '>
                            <div className='row gx-0 gy-0'>
                                <ArchComponent img={archArr[1]} title="The Creator" />
                                <ArchComponent img={archArr[9]} title="The Magician" />
                                <ArchComponent img={archArr[2]} title="The Explorer" />
                            </div>
                            <div className='row gx-0 gy-0' id='bottomArch'>
                                <ArchComponent img={archArr[11]} title="The Lover" />
                                <ArchComponent img={archArr[3]} title="The Hero" />
                                <ArchComponent img={archArr[8]} title="The Ruler" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='archetypes-grid' className='container '>
                            <div className='row gx-0 gy-0'>
                                <ArchComponent img={archArr[6]} title="The Innocent" />
                                <ArchComponent img={archArr[7]} title="The Jester" />
                                <ArchComponent img={archArr[5]} title="The Outlaw" />
                            </div>
                            <div className='row gx-0 gy-0' id='bottomArch'>
                                <ArchComponent img={archArr[0]} title="The Sage" />
                                <ArchComponent img={archArr[4]} title="The Caregiver" />
                                <ArchComponent img={archArr[10]} title="The Everyman" />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <br />
                {width <= 700 ? (
                    <Swiper
                        id='featured-swiper'
                        modules={[Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{ clickable: true }}
                    >
                        {width <= 414 ? (
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
                                            <img src={img} alt="" onClick={route} className='vitelli-single' />
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
                                            <img id='featuredImg' src={img} alt="" onClick={route} className='vitelli-double' />
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
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center triple-div'>
                                    <div id='featuredText'>
                                        <h2>FEATURED</h2>
                                        <p>Shop products from our editorials if you haven't taken the test yet!</p>
                                        <div>
                                            See all editorial products
                                        </div>
                                    </div>
                                    <div>
                                        <img id='featuredImg' src={img} alt="" onClick={route} className='vitelli-triple' />
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
                                    <FeaturedImages image={Andrej} brand={'Andrej Gronau'} description={'Exclusive Multicolor Check Lurex Dress'} price={'1080€'} ids={'andrej-triple'} />
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
                <div>
                    <p>
                        Width: {width}
                    </p>
                    <p>Height: {height}</p>
                </div>
                <div className='container' id="descriptionsContainer">
                    <div id="bottomContainer" className='row '>
                        <div className='col px-0 py-0'>
                            <img src={bottomImg2} alt="" id="bottomContainerImg" onClick={() => route2('PamoloPage')} />
                            <div id="bottomContainerText1">
                                <p>INTERVIEW WITH ALEJANDRO GÓMEZ PALOMO</p>
                                <p>ANGELA DI PEDE</p>
                            </div>
                        </div>
                        <div className='col px-0 py-0'>
                            <img src={bottomImg1} alt="" id="bottomContainerImg" onClick={() => route2('VitelliPage')} />
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