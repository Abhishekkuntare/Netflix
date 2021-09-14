import { useHistory } from 'react-router';
import './Payment.css'


function Payment2() {
    const history = useHistory();




    return (
        <>
            <div className="payment">
                <h5>PLANS AND OFFER</h5>
                <p className="permonth">per month</p>
                <div className="plansoffer">
                    <p>Basic 4K + HDR <i class="fas fa-rupee-sign"></i>999 & 30% off </p>
                </div>
                <div className="terms">
                    <p>Powered by  <strong>Stripe</strong> </p>
                    <p>Terms & Privercy</p>
                </div>

            </div>

            <div className="google">
                <div className="google">
                    <i class="fab fa-google-pay goole__logo"></i>
                </div>
                <div className="border">

                </div>


                <div className="payment__form">
                    <form >
                        <h1> Or Pay With Card</h1>
                        <input className="payment__name"
                            type="text" placeholder="Enter Your Name" />

                        <input className="payment__email"
                            type="email" placeholder="Enter Your Email " />

                        <input className="payment__card"
                            type="text" placeholder="Card Number" /> <i class="fab fa-cc-visa"></i> <i class="fab fa-cc-mastercard"></i><i class="fas fa-credit-card"></i>
                        <input className="mm"
                            type="text" placeholder="MM" />
                        <input className="yy"
                            type="text" placeholder="YY" />

                        <input className="cvc"
                            type="text" placeholder="CVC" />
                        <i class="far fa-credit-card cvv"></i>

                        <div>
                            <button
                                onClick={() => history.push('/Successfully')}
                                className="button"
                                type="submit">Subscribe</button>
                        </div>

                        <div className="paragraphplan"><p>By conforming your subscription, you allow to charge  your card for payment and future payment is accordence with their Terms and conditons</p></div>

                    </form>
                </div>


            </div>
        </>
    )
}

export default Payment2
