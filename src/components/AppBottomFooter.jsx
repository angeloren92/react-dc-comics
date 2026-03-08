import facebookLogo from '/footer-facebook.png'
import twitterLogo from '/footer-twitter.png'
import youtubeLogo from '/footer-youtube.png'
import pinterestLogo from '/footer-pinterest.png'
import periscopeLogo from '/footer-periscope.png'


export default function AppBottomFooter() {

    return (
        <section className="bottom-footer position-relative z-1">
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
                <div className="py-5 flex-shrink-0">
                    <button className="btn btn-outline-primary text-white rounded-0">SIGN-UPNOW!</button>
                </div>
                <div className="py-1 py-md-3 py-lg-5">
                    <a href="#" className="text-decoration-none fw-bold">FOLLOW US</a>
                    <a href="#"><img src={facebookLogo} alt="facebook logo" /></a>
                    <a href="#"><img src={twitterLogo} alt="twitter logo" /></a>
                    <a href="#"><img src={youtubeLogo} alt="youtube logo" /></a>
                    <a href="#"><img src={pinterestLogo} alt="pinterest logo" /></a>
                    <a href="#"><img src={periscopeLogo} alt="periscope logo" /></a>
                </div>
            </div>
        </section>
    )
}