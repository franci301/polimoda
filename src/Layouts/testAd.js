import {useNavigate} from 'react-router-dom';

function TestAd() {

    const navigate = useNavigate();
    function routeTest(){
        navigate('/Test/*');
    }
    return (
        <div>
            <h5>Take our Personality Test to get personalized product selection!</h5>
            <button className="btn btn-dark" onClick={routeTest}>Do the test</button>
        </div>
    );
}

export default TestAd;