import { Navbar, Nav, Container } from 'react-bootstrap';
// import components used in the file below from react-bootstrap and react-router-dom
import '../Assets/css/responsiveNav.css'

function responsiveHomeNav() {
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
        color: '#453127'
    };

    const linkStyleBrand={
        textDecoration: "none",
        color: '#453127',
        fontSize: '1.5em'
    }

    return (
        <Navbar expand="md">
            <Container id='navContainer'>
                <div></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='center-nav-home'>
                        <Navbar.Brand>
                            <Nav.Link style={linkStyleBrand} href='/*'>
                                XXXXX
                            </Nav.Link>
                        </Navbar.Brand>
                    </Nav>
                    <Nav id='right-nav-home'>
                        <ul className="navbar-nav" id='right-ul'>
                            {loggedIn === true ? (
                                <li className='nav-item'> <Nav.Link style={linkStyle} href='/MyProfile/*'>Profile</Nav.Link></li>
                            ) : (
                                <li className='nav-item'> <Nav.Link style={linkStyle} href='/LoginPage/*'>Login</Nav.Link></li>
                            )}
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default responsiveHomeNav;