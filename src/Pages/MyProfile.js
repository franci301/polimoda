import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import ProfileNav from '../Layouts/ProfileNav.js';
import TestAd from '../Layouts/testAd.js';
import duck from '../Assets/Images/duck.jpg';
import getDetails from '../firebase/getDetails.js';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../Assets/css/profile.css';

function MyProfile() {
    // const getProps = useLocation();
    // console.log(getProps.state.answerArr);
    const [listArch, setList] = useState(null);
    const navigate = useNavigate();
    var showLogout = false;
    var location = window.location.href;

    useEffect(() => {
        getDetails().then((res) => {
            const list = res._document.data.value.mapValue.fields.archetypesValue.arrayValue.values
            console.log(list);
            setList(list)
        }).catch((error) => {
            // switch(error.code) {
            //     case 'resource-exhausted':
            //         alert(`Internal server error. Contant system administrator`);
            //         break;
            //     default:
            //         console.log(error.code);
            // }
        });
    }, []);
    if (location.includes('/MyProfile/*')) {
        showLogout = true;
    } else {
        showLogout = false;
    }
    function logout() {
        signOut(auth).then(() => {
            localStorage.removeItem('userLogin');
            window.location.href = '/HomePage/*'
        })
            .catch((error) => { console.log(error) });
    }
    return (
        <div>
            <Nav />
            <ProfileNav current={'MyProfile'} />
            <div id='archetypesContainer'>
                {showLogout ? (
                    <button className="btn btn-danger" onClick={logout}>Logout</button>
                ) : (
                    <div></div>
                )}
                <div className='d-flex flex-row justify-content-center'>
                    {listArch != null ? (
                        listArch.map((archetype, index) => (
                            <div key={index}>
                                <img id='archetypesDuck' src={duck} alt="" />
                                <p>{archetype.stringValue}</p>
                                <p>Sample text</p>
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