import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/nav.css';
import { Link } from 'react-router-dom';

function nav() {
    var showLogout = false;
    var location = window.location.href;
    var loggedIn;
    var userLogged = localStorage.getItem('userLogin');
    if (location.includes('/MyProfile/*')) {
        var showLogout = true;
    } else {
        showLogout = false;
    }
    if (userLogged) {
        loggedIn = true;
    } else {
        loggedIn = false;
    }

    const linkStyle = {
        textDecoration: "none",
        color: 'black'
    };
    return (
        <nav className="navbar navbar-expand-md navbar bg-warning sticky-top py-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                        <li className='nav-item' id='center-nav'><Link style={linkStyle} to='/*'>Home</Link></li>
                        <li className='nav-item' id='center-nav'><Link style={linkStyle} to='/Blog/*'>Blog</Link></li>
                    </ul>
                    <ul className="position-absolute navbar-nav start-10">
                        <li className='nav-item' id='left-nav'>XXXXX</li>
                    </ul>
                    <ul id='right-nav-div' className="navbar-nav mx-right">
                        {loggedIn === true ? (
                            <li className='nav-item' id='right-nav'><Link style={linkStyle} to='/MyProfile/*'>Profile</Link></li>
                        ) : (
                            <li className='nav-item' id='right-nav'><Link style={linkStyle} to='/LoginPage/*'>Login</Link></li>
                        )}
                        <li className='nav-item' id='right-nav'>Cart (0)</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default nav;