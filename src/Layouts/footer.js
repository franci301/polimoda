import '../Assets/css/footer.css';
import logo from '../Assets/Images/logo.png';
function home() {
    window.location.href = '/HomePage/*'
}
function footer() {
    return (
        <footer className="navbar py-3">
            <div className="container-fluid">
                <div id='footerLogo'>
                    <img id='logo' src={logo} alt="Logo" onClick={home} />
                    <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
                    <input type="text" placeholder='Email'/>
                </div>
                <div className="d-inline-flex" id='middle-container'>
                    <div className="row">
                        <div className="col">
                            <h5>Customer Service</h5>
                            <div>
                                <p>Help and Contacts</p>
                                <p>Terms and Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Cookie Preferences</p>
                                <p>Accessibility</p>
                            </div>
                        </div>
                        <div className="col">
                            <h5>Shipping & Returns</h5>
                            <div>
                                <p>Orders and Shipments</p>
                                <p>Tracking Orders</p>
                                <p>Returns and Refunds</p>
                                <p>FAQs</p>
                            </div>
                        </div>
                        <div className="col">
                            <h5>About ARKX</h5>
                            <div>
                                <p>Our Story</p>
                                <p>Loyalty Building Program</p>
                                <p>Discount Invite a Friend</p>
                            </div>
                        </div>
                        <div className="col">
                            <h5>Connect with us</h5>
                            <div>
                                <p><a style={{color:'var(--brown)'}} href="https://www.instagram.com/arkx_store/?hl=en">Instagram</a></p>
                                <p>TikTok</p>
                                <p>Facebook</p>
                            </div>
                        </div>
                    </div>
                </div>      
            </div>
        </footer>
    );
}

export default footer;