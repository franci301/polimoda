import {useNavigate} from 'react-router-dom';
import '../Assets/css/testAd.css'
function TestAd() {

    const navigate = useNavigate();
    function routeTest(){
        navigate('/Test/*');
    }
    return (
        <div id='testContainer'>
            <h5>Take our Archetypes of Power Discovery to get personalized product selection!</h5>
            <button className="btn btn-dark" onClick={routeTest}>Start Archetypes of Power Discovery</button>
        </div>
    );
}

export default TestAd;