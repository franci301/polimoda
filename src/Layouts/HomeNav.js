import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/nav.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/Images/logo.png';
function home() {
    window.location.href = '/HomePage/*'
}
function HomeNav() {
    var loggedIn;
    const navigate = useNavigate();
    var userLogged = localStorage.getItem('userLogin');
    if(userLogged){
        loggedIn = true;
    }else{
        loggedIn = false;
    }
    const linkStyle = {
        textDecoration: "none",
        color: '#453127'
    };
    const linkStyleLogin ={
        textDecoration: "none",
        color:'#453127'
    }
    function route(){
        navigate('/HomePage/*')
    }
    return (
        <nav className="navbar navbar-expand navbar sticky-top py-3">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                        <li className='nav-item' id='left-nav'> <h3><img id='homeNavLogo' src={logo} alt="Logo" onClick={home} /></h3> </li>

                    </ul>
                    <ul className="navbar-nav mx-right">
                        {loggedIn === false ? (
                            <li className='nav-item' id='right-nav'><Link style={linkStyleLogin} to='/LoginPage/*'>LOGIN</Link></li>
                        ) : (
                        <li className='nav-item' id='right-nav'><Link style={linkStyle} to='/MyProfile/*'>PROFILE</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HomeNav;