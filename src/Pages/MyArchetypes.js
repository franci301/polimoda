import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import duck from '../Assets/images/duck.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import calc from '../Assets/maths/calculatePercentages.js'
import '../Assets/css/profile.css';

function MyArchetypes() {
    console.log(calc([1], [1]));
    var showLogout = false;
    var location = window.location.href;
    if (location.includes('/MyProfile/*')) {
        var showLogout = true;
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
            <h2>MY ARCHETYPES</h2>
            {showLogout ? (
                <button className="btn btn-danger" onClick={logout}>Logout</button>

            ) : (
                <div></div>
            )}
            <div className='d-flex flex-row justify-content-center'>
                <div>
                    <img id='archetypesDuck' src={duck} alt="" />
                    <p>Type %</p>
                    <p>Sample text</p>
                </div>
                <div>
                    <img id='archetypesDuck' src={duck} alt="" />
                    <p>Type %</p>
                    <p>Sample text</p>
                </div>
                <div>
                    <img id='archetypesDuck' src={duck} alt="" />
                    <p>Type %</p>
                    <p>Sample text</p>
                </div>
            </div>
            <div id='a'>
                <Footer />
            </div>
        </div>
    );
}
export default MyArchetypes;