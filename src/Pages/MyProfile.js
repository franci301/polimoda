import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import ProfileNav from '../Layouts/ProfileNav.js';
import TestAd from '../Layouts/testAd.js';
import getDetails from '../firebase/getDetails.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Assets/css/profile.css';


function MyProfile() {
    // const getProps = useLocation();
    // console.log(getProps.state.answerArr);
    const [listArch, setList] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getDetails().then((res) => {
            let totData = [];
            for (let index = 0; index < res._document.data.value.mapValue.fields.archetypesValue.arrayValue.values.length; index++) {
                const list = res._document.data.value.mapValue.fields.archetypesValue.arrayValue.values[index]
                const description = res._document.data.value.mapValue.fields.archetypeDescription.arrayValue.values[index]
                const imgs = res._document.data.value.mapValue.fields.archetypesImage.arrayValue.values[index]
                totData.push([list,description,imgs])
            }
            // console.log(totData)
            setList(totData)
        }).catch((error) => {
            console.log(error)
            switch(error.code) {
                case 'resource-exhausted':
                    alert(`Internal server error. Contant system administrator`);
                    break;
                default:
                    console.log(error.code);
            }
        });
       
    }, []);
    
    function routeShop() {
        navigate('/ShopPage/*')
    }
    return (
        <div>
            <ResponsiveNav />
            <ProfileNav current={'MyProfile'} />
            <div id='archetypesContainer'>
                <div className='d-flex flex-row justify-content-center'>
                    {listArch != null ? (
                        listArch.map((archetype, index) => (
                            <div key={index}>
                                <img id='archetypesDuck' src={archetype[2].stringValue} alt="" />
                                <p id='archName'>{archetype[0].stringValue.toUpperCase()}</p>
                                <p>{archetype[1].stringValue}</p>
                            </div>
                        ))
                    ) : (
                        <div>
                            Complete the test to see which archetype you belong to
                        </div>
                    )}
                </div>
                <TestAd />
            </div>
            {/* <div id='a'> */}
            <Footer />
            {/* </div> */}
        </div>
    );
}
export default MyProfile;