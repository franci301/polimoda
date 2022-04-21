import Nav from '../Layouts/nav.js';
import Footer from '../Layouts/footer.js';
import '../Assets/css/profile.css';
import duck from '../Assets/images/duck.jpg';


function MyArchetypes(){
    return(
        <div>
            <Nav/>
            <h2>MY ARCHETYPES</h2>
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