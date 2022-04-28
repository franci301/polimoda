import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import duck from '../Assets/images/duck.jpg';
import getDetails from '../firebase/getDetails.js';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react'
import '../Assets/css/profile.css';

function MyArchetypes() {
    // const getProps = useLocation();
    // console.log(getProps.state.answerArr);
    const [listArch, setList] = useState(null);

    useEffect(() => {
        getDetails().then((res) => {
            const list = res._document.data.value.mapValue.fields.archetypesValue.arrayValue.values
            setList(list)
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

    // listArch.map((arch) => {console.log(arch.stringValue)})
    // console.log(listArch)


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
            <div id='a'>
                <Footer />
            </div>
        </div>
    );
}
export default MyArchetypes;