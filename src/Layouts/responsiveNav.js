import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
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
        color: '#453127'
    };

    return (
        <Navbar bg="#453127" expand="md">
            <Container>
                <Navbar.Brand>
                    <Nav.Link style={linkStyle}>
                        XXXXX
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <ul className="navbar-nav mx-auto" id='center-ul'>
                            <li className='center-nav-item' ><Nav.Link style={linkStyle} href="/*">Home</Nav.Link></li>
                            <li className='center-nav-item' > <Nav.Link style={linkStyle} href="/Blog/*">Archetypal Stories</Nav.Link></li>
                            {loggedIn === true ? (
                                <li className='center-nav-item' > <Nav.Link style={linkStyle} href='/ShopPage/*'>Shop</Nav.Link></li>
                            ) : (
                                <></>
                            )}
                        </ul>
                    </Nav>
                    <Nav>
                        <ul className="navbar-nav" id='right-ul'>
                            {loggedIn === true ? (
                                <li className='nav-item' id='right-nav'> <Nav.Link style={linkStyle} href='/MyProfile/*'>Profile</Nav.Link></li>
                            ) : (
                                <li className='nav-item' id='right-nav'> <Nav.Link style={linkStyle} href='/LoginPage/*'>Login</Nav.Link></li>
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