import './styles/footer.css';

function Footer(){
    return(
        <div className="footer">
            <footer>
                <div className="footerUp">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">FAQs</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="footerDown">
                    © 2024 Copyright: Johan Barragan Inc.
                </div>
            </footer>
        </div>
    );
}

export default Footer;