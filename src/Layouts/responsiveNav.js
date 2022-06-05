import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase-config';
import {useState,useLayoutEffect, useEffect} from 'react';
import logo from '../Assets/Images/logo.png';
import ProfileNav from '../Layouts/ProfileNav.js';
import '../Assets/css/responsiveNav.css'

function ResponsiveNav() {
    var loggedIn;
    var showProfileNav = false;
    var userLogged = localStorage.getItem('userLogin');
    const locationsArray = ['/MyInformation/*','/MyProfile/*','/Wishlist/*','/MyOrders/*']
    const [size, setSize] = useState(window.innerWidth);
    const [email,setUser] = useState('');
    
    useEffect(() => {
        const obj = localStorage.getItem('userLogin');
        if(obj !== null){
            const email = JSON.parse(obj).user.email;
            setUser(email);
        }
    },[])
    
    if(locationsArray.includes(window.location.pathname)){
        showProfileNav = true;
    }
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
    

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    function logout() {
        signOut(auth).then(() => {
            localStorage.removeItem('userLogin');
            window.location.href = '/HomePage/*'
        })
            .catch((error) => { console.log(error) });
    }
    
    function home() {
        window.location.href = '/HomePage/*'
    }

    return (
        <Navbar bg="#453127" expand="md">
            <Container id='navContainer'>
                <img id='navLogo' src={logo} alt="" onClick={home} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav id='center-nav-main'>
                        <ul className="navbar-nav mx-auto" id='center-ul'>
                            <li className='center-nav-item' ><Link style={linkStyle} to="/*">HOME</Link></li>
                            <li className='center-nav-item' > <Link style={linkStyle} to="/Blog/*">ARCHETYPAL STORIES</Link></li>
                            {loggedIn === true? (
                                <li className='center-nav-item' > <Link style={linkStyle} to='/ShopPage/*'>SHOP</Link></li>
                            ) : (
                                <></>
                            )}
                        </ul>
                        <ul className="navbar-nav" id='right-nav-main'>
                            {loggedIn === true ? (
                                <div id='profileContainer'>
                                    <li className='nav-item' onClick={logout} id='logout-li' style={{color:'var(--brown)'}}>LOGOUT</li>

                                    <li className='nav-item' id='profile-li' > <Link style={linkStyle} to='/MyProfile/*'>PROFILE</Link></li>
                                </div>
                            ) : (
                                <li className='nav-item'> <Link style={linkStyle} to='/LoginPage/*'>LOGIN</Link></li>
                            )}
                            <li className='nav-item' style={{color:'var(--brown)'}} id='cartPadding'>CART (0)</li>
                        </ul>
                    </Nav>
                    {size < 768 && showProfileNav ? (
                        <ProfileNav/>
                    ):(
                        <></>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ResponsiveNav;