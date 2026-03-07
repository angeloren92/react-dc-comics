import dcLogoBg from '/dc-logo-bg.png'
import facebookLogo from '/footer-facebook.png'
import twitterLogo from '/footer-twitter.png'
import youtubeLogo from '/footer-youtube.png'
import pinterestLogo from '/footer-pinterest.png'
import periscopeLogo from '/footer-periscope.png'


export default function AppFooter() {

  return (
    <footer className="">
      <div className="main-footer">
        <div className="container">
          <div className="row py-5">
            <div className="col-6 col-md-4 col-lg-2">
              <ul className="list-unstyled">
                <li>DC COMICS</li>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
              <ul className="list-unstyled">
                <li>SHOP</li>
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <ul className="list-unstyled">
                <li>DC</li>
                <li>Terms Of Use</li>
                <li>Privacy policy (New)</li>
                <li>Ad Choices</li>
                <li>Advertising</li>
                <li>Jobs</li>
                <li>Subscriptions</li>
                <li>Talent Workshops</li>
                <li>CPSC Certificates</li>
                <li>Rating</li>
                <li>Shop Help</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <ul className="list-unstyled">
                <li>SITES</li>
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </div>
            <div className="col-12 col-lg-6 position-relative">
              <img id="footer-logo" src={dcLogoBg} alt="" className="img-fluid position-absolute" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer position-relative z-1">
        <div className="container d-flex justify-content-between">
          <div className="py-5">
            <button className="btn btn-outline-primary text-white rounded-0">SIGN-UP NOW!</button>
          </div>
          <div className="py-5">
            <a href="#" className="text-decoration-none fw-bold">FOLLOW US</a>
            <a href="#"><img src={facebookLogo} alt="facebook logo" /></a>
            <a href="#"><img src={twitterLogo} alt="twitter logo" /></a>
            <a href="#"><img src={youtubeLogo} alt="youtube logo" /></a>
            <a href="#"><img src={pinterestLogo} alt="pinterest logo" /></a>
            <a href="#"><img src={periscopeLogo} alt="periscope logo" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}