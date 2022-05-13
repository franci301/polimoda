import '../Assets/css/footer.css';

function footer() {
    return (
        <footer className="navbar py-3">
            <div className="container-fluid">
                <div id='footerLogo'>
                    <h3>XXXXX</h3>
                </div>
                <div className="d-inline-flex" id='middle-container'>
                    <div>
                        <h5>Customer Service</h5>
                        <div>
                            <p>Help and Contacts</p>
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Cookie Preferences</p>
                            <p>Accessibility</p>
                        </div>
                    </div>
                    <div>
                        <h5>Shipping & Returns</h5>
                        <div>
                            <p>Orders and Shipments</p>
                            <p>Tracking Orders</p>
                            <p>Returns and Refunds</p>
                            <p>FAQs</p>
                        </div>
                    </div>
                    <div>
                        <h5>About ARKX</h5>
                        <div>
                            <p>Our Story</p>
                            <p>Loyalty Building Program</p>
                            <p>Discount Invite a Friend</p>
                        </div>
                    </div>
                    <div>
                        <h5>Connect with us</h5>
                        <div>
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