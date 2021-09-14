import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">

            <div className="line"></div>
            <div className="container1">
                <h6 className="headOne">Questions? Call 915-607-553-6</h6>
                <br />
                <div className="itemsOne">
                    <p>FAQ</p>
                    <p>Investor Relations</p>
                    <p>Privacy</p>
                    <p>Speed Test</p>
                </div>
            </div>
            <div className="container2">
                <div className="itemsTwo">
                    <p>Help Centre</p>
                    <p>Jobs</p>
                    <p>Cookie Preferences</p>
                    <p>Legal Notices</p>
                </div>
            </div>
            <div className="container3">
                <div className="itemsThree">
                    <p>Account</p>
                    <p>Ways to Watch</p>
                    <p>Corporate Information</p>
                    <p>Only on Netflix</p>
                </div>
            </div>
            <div className="container4">
                <div className="itemsFour">
                    <p>Media Centre</p>
                    <p>Terms of Use</p>
                    <p>Corporate Information</p>
                    <p>Contact Us</p>
                </div>
            </div>

            <div className="container5">

                <span>Netflix India</span>
                <br />
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-facebook-square"></i>
                <i className="fas fa-link"></i>
                <br />
                <p >www.netflix.com/in <i className="far fa-copyright"></i> 2021</p>

                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    </a>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer
