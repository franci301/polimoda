import FeaturedImages from '../Layouts/featuredImages.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useLayoutEffect, useEffect } from 'react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function BlogShop({ obj }) {

    const [size, setSize] = useState(window.innerWidth);
    // sets the size of the screen to a variable
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return (
        <>
            <div className="d-flex flex-row">
                <Swiper
                    id='featured-swiper'
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{ clickable: true }}
                >
                    {size <= 1000 ? (
                        <>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                    <FeaturedImages image={obj[0][0]} brand={obj[1][0]} description={obj[2][0]} price={obj[3][0]} clickable={false} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                    <FeaturedImages image={obj[0][1]} brand={obj[1][0]} description={obj[2][1]} price={obj[3][1]} clickable={false} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                    <FeaturedImages image={obj[0][2]} brand={obj[1][0]} description={obj[2][2]} price={obj[3][2]} clickable={false}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                    <FeaturedImages image={obj[0][3]} brand={obj[1][0]} description={obj[2][3]} price={obj[3][2]} clickable={false}/>
                                </div>
                            </SwiperSlide>
                        </>
                    ) : (
                        <>
                            <SwiperSlide>
                                <div id='featuredImgContainer' className='d-flex flex-row justify-content-center align-items-center'>
                                    <FeaturedImages image={obj[0][0]} brand={obj[1][0]} description={obj[2][0]} price={obj[3][0]} clickable={false}/>
                                    <FeaturedImages image={obj[0][1]} brand={obj[1][0]} description={obj[2][1]} price={obj[3][1]} clickable={false}/>
                                    <FeaturedImages image={obj[0][3]} brand={obj[1][0]} description={obj[2][3]} price={obj[3][2]} clickable={false}/>
                                    <FeaturedImages image={obj[0][2]} brand={obj[1][0]} description={obj[2][2]} price={obj[3][3]} clickable={false}/>
                                </div>
                            </SwiperSlide>
                        </>
                    )}
                </Swiper>
            </div>
        </>
    )
}
export default BlogShop;