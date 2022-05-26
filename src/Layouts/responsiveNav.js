import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import logo from '../Assets/Images/logo.png';
// import components used in the file below from react-bootstrap and react-router-dom
import '../Assets/css/responsiveNav.css'

function responsiveNav() {
    var loggedIn;
    var userLogged = localStorage.getItem('userLogin');
    if (userLogged) {
        loggedIn = true;
    } else {
        loggedIn = false;
    }

    const linkStyle = {
        textDecoration: "none",
        color: '#453127',
        width: '100%'
    };

function logout() {
    signOut(auth).then(() => {
        localStorage.removeItem('userLogin');
        window.location.href = '/HomePage/*'
    })
        .catch((error) => { console.log(error) });
}

    return (
        <Navbar bg="#453127" expand="md">
            <Container id='navContainer'>
                <div className=''>
                    <Navbar.Brand>
                        <Link to='/*' style={linkStyle}>
                            {/* <img id='navLogo' src={logo} alt="" /> */}
                            XXXX
                        </Link>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='center-nav-main'>
                        <ul className="navbar-nav mx-auto" id='center-ul'>
                            <li className='center-nav-item' ><Link style={linkStyle} to="/*">Home</Link></li>
                            <li className='center-nav-item' > <Link style={linkStyle} to="/Blog/*">Archetypal Stories</Link></li>
                            {loggedIn === true ? (
                                <li className='center-nav-item' > <Link style={linkStyle} to='/ShopPage/*'>Shop</Link></li>
                            ) : (
                                <></>
                            )}
                        </ul>
                    </Nav>
                    <Nav id='right-nav-main'>
                        <ul className="navbar-nav" id='right-ul'>
                            {loggedIn === true ? (
                                <div id='profileContainer'>
                                    <li className='nav-item' onClick={logout} id='logout-li'>Logout</li>

                                    <li className='nav-item' id='profile-li'> <Link style={linkStyle} to='/MyProfile/*'>Profile</Link></li>
                                </div>
                            ) : (
                                <li className='nav-item'> <Link style={linkStyle} to='/LoginPage/*'>Login</Link></li>
                            )}
                            Cart (0)
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default responsiveNav;