import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from 'react-router-dom'
// import components used in the file below from react-bootstrap and react-router-dom
import '../Assets/css/responsiveNav.css'

function responsiveNav() {
    var showLogout = false;
    var location = window.location.href;
    var loggedIn;
    var userLogged = localStorage.getItem('userLogin');

    if (location.includes('/MyProfile/*')) {
        showLogout = true;
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
        color: '#453127',
        width:'100%'
    };

    return (
        <Navbar bg="#453127" expand="md">
            <Container id='navContainer'>
                <Navbar.Brand>
                    <Link style={linkStyle} to='/*'>
                        XXXXX
                    </Link>
                </Navbar.Brand>
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
                                <li className='nav-item'> <Link style={linkStyle} to='/MyProfile/*'>Profile</Link></li>
                            ) : (
                                <li className='nav-item'> <Link style={linkStyle} to='/LoginPage/*'>Login</Link></li>
                            )}
                            <Nav.Link>Cart (0)</Nav.Link>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default responsiveNav;