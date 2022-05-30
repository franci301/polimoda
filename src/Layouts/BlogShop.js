import duck from '../Assets/Images/duck.jpg'
import FeaturedImages from '../Layouts/featuredImages.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useLayoutEffect, useEffect } from 'react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

function BlogShop({ obj }) {

    const [size, setSize] = useState(window.innerWidth);
    const [numSlides, setNumSlides] = useState(4);
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
                    modules={[Navigation, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={4}
                    navigation={{ clickable: true }}>
                    {obj.length !== 0 ?
                        (obj.map((img, index) => (
                            <SwiperSlide>
                                <div key={index}>
                                    <FeaturedImages image={obj[0][index]} brand={obj[1]} description={obj[2][index]} price={obj[3][index]} />
                                </div>
                            </SwiperSlide>
                        ))): (<></>)}
                </Swiper>
            </div>
        </>
    )
}
export default BlogShop;