import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/nav.css';
function nav() {
    return (
        <nav className="navbar navbar-expand-md navbar bg-warning sticky-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mx-auto">
                        <li className='nav-item' id='center-nav'>Home</li>
                        <li className='nav-item' id='center-nav'>Blog</li>
                    </ul>
                    <ul className="position-absolute navbar-nav start-10">
                        <li className='nav-item' id='left-nav'>XXXXX</li>
                    </ul>
                    <ul className="navbar-nav mx-right">
                        <li className='nav-item' id='right-nav'>Profile</li>
                        <li className='nav-item' id='right-nav'>Cart (0)</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default nav;