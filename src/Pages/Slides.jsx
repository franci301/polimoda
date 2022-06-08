import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper';
import Creator from '../Assets/Images/Meet the Archetypes - Creator.jpg';
import Explorer from '../Assets/Images/Meet the Archetypes - Explorer.jpg';
import Hero from '../Assets/Images/Meet the Archetypes - Hero.jpg';
import Innocent from '../Assets/Images/Meet the Archetypes - Innocent.jpg';
import Outlaw from '../Assets/Images/Meet the Archetypes - Outlaw.jpeg';
import Ruler from '../Assets/Images/Meet the Archetypes - Ruler.jpg';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Slides() {
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{delay:5000}}
            >
                <SwiperSlide><div id='archetypes-grid' className='container '>
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
                </div></SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
export default Slides;