import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import { useLocation } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Assets/css/Product.css';
import 'swiper/css';
import 'swiper/css/navigation';
function ProductPage() {
    const location = useLocation();
    const [mainImg, setMainImg] = useState(location.state.imgs.Vitelli);
    const [sideImgs, setSideImgs] = useState([location.state.imgs.Vitelli1, location.state.imgs.Vitelli2, location.state.imgs.Vitelli3]);
    let ignore = true;

    if (location.state != null) {
        ignore = false;
    }

    function handleSet(imgToSwap) {
        const oldMainImg = mainImg;
        setMainImg(imgToSwap);
        for (let index = 0; index < sideImgs.length; index++) {
            if (sideImgs[index] === imgToSwap) {
                sideImgs[index] = oldMainImg;
                break;
            }

        }
        setSideImgs([...sideImgs, oldMainImg]);
    }

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

    console.log(size)
    return (
        <div>
            <ResponsiveNav />
            <br />
            <div className='d-flex flex-column flex-lg-row justify-content-center' id='product-container'>
                {size >= 1000 ?
                    (
                        <div className="outer container" id='bigContainer'>
                            <div className="container flex-child" id='bigContainer'>
                                <div className="div side-img">
                                    <img src={sideImgs[0]} onClick={() => handleSet(sideImgs[0])} />
                                </div>
                                <div className="div side-img">
                                    <img src={sideImgs[1]} onClick={() => handleSet(sideImgs[1])} />
                                </div>
                                <div className="div side-img">
                                    <img src={sideImgs[2]} onClick={() => handleSet(sideImgs[2])} />
                                </div>
                            </div>
                            <div className="container div flex-child" id='div-r'>
                                {ignore ?
                                    (
                                        <>ERROR LOADING IMAGES PLEASE REFRESH YOUR BROWSER - IF THE PROBLEM PERSISTS CONTACT A MEMBER OF THE TEAM</>
                                    ) : (
                                        <>
                                            {mainImg !== undefined ? (
                                                <img src={mainImg} id='main' />
                                            ) : (
                                                <img id='main' src={location.state.imgs.Vitelli} />
                                            )}
                                        </>
                                    )}

                            </div>
                        </div>
                    ) : (
                        <div>
                            {/* <BlogShop obj={[[pamolo, pamolo1, pamolo2, pamolo3], ['Pamolo Spain'], ['Red Floral Maxi Kaftan', 'Red Floral Cargo Trousers', 'Blue Psico Romeo Jacket', 'Aitor Blue Shirt'], ['6554€', '454€', '454€', '353€']]} /> */}
                            <Swiper
                                id='featured-swiper'
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{ clickable: true }}>

                                <SwiperSlide>
                                    <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={location.state.imgs.Vitelli} className='single-vitelli'/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={location.state.imgs.Vitelli1} className='single-vitelli'/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={location.state.imgs.Vitelli2} className='single-vitelli'/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={location.state.imgs.Vitelli3} className='single-vitelli'/>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    )}
                <div id='textContainerProduct'>
                    <div id='productName'>
                        <h5>{location.state.type}</h5>
                    </div>
                    <div id='designerName'>
                        <h4>{location.state.name}</h4>
                    </div>
                    <div id='productDescription'>
                        <p>{location.state.description} </p>
                    </div>
                    <div id='productDetails'>
                        <p>{location.state.details}</p>
                    </div>
                    <div >
                        <div id='productTitle' >
                            <div className='d-flex flex-column' >
                                <p>{location.state.price} </p>
                                <p>{location.state.colour}</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='d-flex flex-column' id='selection-container' >
                        <div className='f-flex flex-row'>
                            <div id='select'>
                                <h5>XS, S, M, L, XL</h5>
                                <select name="" id="productSelect">
                                    <option value="A">SELECT A SIZE</option>
                                    <option value="A">XS</option>
                                    <option value="A">S</option>
                                    <option value="A">M</option>
                                    <option value="A">L</option>
                                    <option value="A">XL</option>
                                </select>
                            </div>
                        </div>
                        <br />
                        <div className='d-flex flex-col' id='productButtonContainer'>
                            <button id='button1'>ADD TO CART</button>
                            <button id='button2'>ADD TO WISHLISH</button>
                        </div>
                    </div>
                    <div id='product-manufacturing'>
                        <p>{location.state.manufacturingDetails[3]}</p>
                        <p>{location.state.manufacturingDetails[4]}</p>
                    </div>
                </div>
            </div>
            <div id='productAd'>
                <TestAd />
            </div>
            <br />
            <Footer />
        </div>
    );
}

export default ProductPage;