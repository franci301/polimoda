import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import TestAd from '../Layouts/testAd.js';
import getDetails from '../firebase/getDetails.js';
import ProfileNav from '../Layouts/ProfileNav.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import UploadImages from '../Assets/uploadImages.js';
import '../Assets/css/profile.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


function MyProfile() {
    // const getProps = useLocation();
    // console.log(getProps.state.answerArr);
    const [listArch, setList] = useState(null);
    const [size, setSize] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getDetails().then((res) => {
            let totData = [];
            for (let index = 0; index < res._document.data.value.mapValue.fields.archetypesValue.arrayValue.values.length; index++) {
                const list = res._document.data.value.mapValue.fields.archetypesValue.arrayValue.values[index]
                const description = res._document.data.value.mapValue.fields.archetypeDescription.arrayValue.values[index]
                const imgs = res._document.data.value.mapValue.fields.archetypesImage.arrayValue.values[index]
                totData.push([list, description, imgs])
            }
            // console.log(totData)
            setList(totData)
        }).catch((error) => {
            console.log(error)
            switch (error.code) {
                case 'resource-exhausted':
                    alert(`Internal server error. Contant system administrator`);
                    break;
                default:
                    console.log(error.code);
            }
        });

    }, []);
    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    function upload(){
        UploadImages();
    }

    return (
        <div>
            {/* <button onClick={upload}>upload</button> */}
            <ResponsiveNav />
            {size > 768 ? <ProfileNav /> : null}
            <div id='archetypesContainer'>
                {size < 1000 ? (
                    <Swiper
                    id='profile-swiper'
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation={{ clickable: true }}>
                        {listArch != null ? (
                            listArch.map((archetype, index) => (
                                <SwiperSlide>
                                    <div key={index} className='test-results'>
                                        <img id='archetypesDuck' src={archetype[2].stringValue} alt="" />
                                        <p id='archName'>{archetype[0].stringValue.toUpperCase()}</p>
                                        <p>{archetype[1].mapValue.fields.description.stringValue}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        ) : (
                            <TestAd />
                        )}

                    </Swiper>
                ) : (
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        {listArch != null ? (
                            listArch.map((archetype, index) => (
                                <div key={index} className='test-results'>
                                    <img id='archetypesDuck' src={archetype[2].stringValue} alt={archetype[0].stringValue.toUpperCase()} />
                                    <p id='archName'>{archetype[0].stringValue.toUpperCase()}</p>
                                    <p>{archetype[1].mapValue.fields.description.stringValue}</p>
                                </div>
                            ))
                        ) : (
                            <TestAd />
                        )}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}
export default MyProfile;