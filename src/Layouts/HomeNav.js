import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/nav.css';
import { Link } from 'react-router-dom';

function HomeNav() {
    var loggedIn;
    var userLogged = localStorage.getItem('userLogin');
    if(userLogged){
        loggedIn = true;
    }else{
        loggedIn = false;
    }
    const linkStyle = {
        textDecoration: "none",
        color: 'black'
    };
    const linkStyleLogin ={
        textDecoration: "none",
        color:'#453127'
    }
    return (
        <nav className="navbar navbar-expand-md navbar sticky-top py-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                        <li className='nav-item' id='left-nav'> <h3><Link style={linkStyle} to='/HomePage/*'>XXXXX</Link></h3> </li>
                    </ul>
                    <ul className="navbar-nav mx-right">
                        {loggedIn === false ? (
                            <li className='nav-item' id='right-nav'><Link style={linkStyleLogin} to='/LoginPage/*'>Login</Link></li>
                        ) : (
                        <li className='nav-item' id='right-nav'><Link style={linkStyle} to='/MyProfile/*'>Profile</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HomeNav;