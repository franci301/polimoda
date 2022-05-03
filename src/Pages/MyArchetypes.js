import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import duck from '../Assets/Images/duck.jpg';
import getDetails from '../firebase/getDetails.js';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import '../Assets/css/profile.css';

function MyArchetypes() {
    // const getProps = useLocation();
    // console.log(getProps.state.answerArr);
    const [listArch, setList] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getDetails().then((res) => {
            const list = res._document.data.value.mapValue.fields.archetypesValue.arrayValue.values
            setList(list)
        }).catch((error) => {
            switch(error.code) {
                case 'resource-exhausted':
                    alert(`Internal server error. Contant system administrator`);
                default:
                    console.log(error.code);
            }
        });
    })
    let arr = [];
    let archetype = "";
    var showLogout = false;
    var location = window.location.href;
    if (location.includes('/MyProfile/*')) {
        var showLogout = true;
    } else {
        showLogout = false;
    }

    function shopRoute(){
        navigate('/ShopPage/*');
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
            <h2>MY ARCHETYPES</h2>
            {showLogout ? (
                <button className="btn btn-danger" onClick={logout}>Logout</button>

            ) : (
                <div></div>
            )}
            <div className='d-flex flex-row justify-content-center'>
                {listArch != null ? (
                    listArch.map((archetype,index)=>(
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
            <div id='shopProfile'>
                <h5>View products based on your selected archetypes</h5>
                <button className="btn btn-dark" onClick={shopRoute}>Shop Now!</button>
            </div>
            {/* <div id='a'> */}
                <Footer />
            {/* </div> */}
        </div>
    );
}
export default MyArchetypes;