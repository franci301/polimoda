import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/css/nav.css';

function HomeNav() {
    return (
        <nav className="navbar navbar-expand-md navbar bg-warning sticky-top py-3">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                    <li className='nav-item' id='left-nav'> <h3>XXXXX</h3> </li>
                    </ul>
                    <ul className="navbar-nav mx-right">
                        <li className='nav-item' id='right-nav'>My Profile</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default HomeNav;