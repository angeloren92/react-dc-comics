import facebookLogo from '/footer-facebook.png'
import twitterLogo from '/footer-twitter.png'
import youtubeLogo from '/footer-youtube.png'
import pinterestLogo from '/footer-pinterest.png'
import periscopeLogo from '/footer-periscope.png'


export default function AppBottomFooter() {

    return (
        <section className="bottom-footer">
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
                <div className="my-4 my-md-5 my-lg-6 ">
                    <button className="btn btn-outline-primary text-white py-2 rounded-0">SIGN-UPNOW!</button>
                </div>
                <div className="d-flex gap-3 align-items-center my-4 my-md-5 my-lg-6">
                    <a href="#" className="text-decoration-none fw-bold">FOLLOW&nbsp;US</a>
                    <div className="d-flex flex-wrap gap-3">
                        <a href="#"><img src={facebookLogo} alt="facebook logo" /></a>
                        <a href="#"><img src={twitterLogo} alt="twitter logo" /></a>
                        <a href="#"><img src={youtubeLogo} alt="youtube logo" /></a>
                        <a href="#"><img src={pinterestLogo} alt="pinterest logo" /></a>
                        <a href="#"><img src={periscopeLogo} alt="periscope logo" /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}