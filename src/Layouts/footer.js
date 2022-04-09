import '../Assets/css/footer.css';

function footer() {
    return (
        <footer className="navbar fixed-bottom py-3 bg-warning">
            <div className="container-fluid">
                <div id='footerLogo'>
                    <h3>XXXXX</h3>
                </div>
                <div className="d-inline-flex" id='middle-container'>
                    <div className="column" id='padding'>
                        <p id='footerTitle'>Connect</p>
                        <div id='footerContent'>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Pintrest</p>
                            <p>YouTube</p>
                        </div>
                    </div>
                    <div className="column" id='padding'>
                        <p id='footerTitle'>Resources</p>
                        <div id='footerContent'>
                            <p>Return Policy</p>
                            <p>Track An Order</p>
                            <p>FAQs</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="column">
                        <p id='footerTitle'>About</p>
                        <div id='footerContent'>
                            <p>Our Story</p>
                            <p>Careers</p>
                            <p>Press</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;