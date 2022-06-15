import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import { useLocation } from 'react-router-dom';
import { useState,useEffect, useLayoutEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../Assets/css/Product.css';
import 'swiper/css';
import 'swiper/css/navigation';
function ProductPage() {
    const location = useLocation();
    const name = location.state.name;
    const [mainImg, setMainImg] = useState(location.state.imgs.img);
    const [sideImgs, setSideImgs] = useState([location.state.imgs.img1, location.state.imgs.img2, location.state.imgs.img3]);
    const [size, setSize] = useState(0);
    const [className,setClassName] = useState('');
    const [sideImgClass,setSideImgClass] = useState('');
    
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

    // sets the size of the screen to a variable
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    useEffect(()=>{
        if(location.state.type === 'Faux Leather Midi Dress'){
            setClassName('single-faux');
            setSideImgClass('div side-img-faux');
        }else{
            setClassName('single-vitelli');
            setSideImgClass('div side-img-vitelli');
        }
    },[])

    return (
        <div>
            <ResponsiveNav />
            <br />
            <div className='d-flex flex-column flex-lg-row justify-content-center' id='product-container'>
                {size >= 1000 ?
                    (
                        <div className="outer container" id='bigContainer'>
                            <div className="container flex-child" id='bigContainer'>
                                <div className={sideImgClass}>
                                    <img src={sideImgs[0]} onClick={() => handleSet(sideImgs[0])} />
                                </div>
                                <div className={sideImgClass}>
                                    <img src={sideImgs[1]} onClick={() => handleSet(sideImgs[1])} />
                                </div>
                                <div className={sideImgClass}>
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
                                                <img src={mainImg} id='main' className={name} />
                                            ) : (
                                                <img id='main' src={location.state.imgs.img} className={name} />
                                            )}
                                        </>
                                    )}
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Swiper
                                id='featured-swiper'
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                navigation={{ clickable:true}}>
                                <SwiperSlide>
                                    <div id='productImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={location.state.imgs.img} className={className}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div id='productImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={location.state.imgs.img1} className={className}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div id='productImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={location.state.imgs.img2} className={className}/>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div id='productImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                        <img src={location.state.imgs.img3} className={className}/>
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
                            <button id='button2'>ADD TO WISHLIST</button>
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