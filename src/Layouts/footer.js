import '../Assets/css/footer.css';

function footer() {
    return (
        <footer className="navbar py-3 bg-warning">
            <div className="container-fluid">
                <div id='footerLogo'>
                    <h3>XXXXX</h3>
                </div>
                <div className="d-inline-flex" id='middle-container'>
                    <div className="column" id='padding'>
                        <p id='footerTitle'>Customer Service</p>
                        <div className='d-flex flex-row'>
                            <div id='footerContent'>
                                <p>Help and Contacts</p>
                                <p>Terms and Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Cookie Preferences</p>
                            </div>
                        </div>
                    </div>
                    <div className='column' id='padding'>
                        <p>Shipping and Returns</p>
                        <div id='footerContent'>
                            <p>Orders and Shipments</p>
                            <p>Tracking Orders</p>
                            <p>Returns and Refunds</p>
                            <p>FAQ's</p>
                        </div>
                    </div>
                    <div className="column" id='padding'>
                        <p id='footerTitle'>About ARKX</p>
                        <div id='footerContent'>
                            <p>Our Story</p>
                            <p>Loyalty Building Program</p>
                            <p>Discount Invite a Friend</p>
                        </div>
                    </div>
                    <div className="column">
                        <p id='footerTitle'>Connect With Us</p>
                        <div id='footerContent'>
                            <p>Instagram</p>
                            <p>TikTok</p>
                            <p>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;