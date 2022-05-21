import {Link} from 'react-router-dom';


function ProfileNav({current}) {
    const linkStyle = {
        color:'#453127'
    }
    return (
        <div className="d-flex inline-flex justify-content-center" id='menuTop'>
            {current == 'MyProfile'?(
                <Link to='/MyProfile/*' style={linkStyle}><h2>MY ARCHETYPES</h2></Link>
            ):(
                <Link to='/MyProfile/*'><h2>MY ARCHETYPES</h2></Link>
            )}
            {current == 'MyOrders'?(
                <Link to='/MyOrders/*' style={linkStyle}><h2>MY ORDERS</h2></Link>
            ):(
                <Link to='/MyOrders/*'><h2>MY ORDERS</h2></Link>
            )}
            {current == 'Wishlist'?(
                <Link to='/Wishlist/*' style={linkStyle}><h2>WISHLIST</h2></Link>
            ):(
                <Link to='/Wishlist/*'><h2>WISHLIST</h2></Link>
            )}
            {current == 'MyInformation'?(
                <Link to='/MyInformation/*' style={linkStyle}><h2>MY INFORMATION</h2></Link>
            ):(
                <Link to='/MyInformation/*'><h2>MY INFORMATION</h2></Link>
            )}
        </div>
    );
}

export default ProfileNav;