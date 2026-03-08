import dcLogoBg from '/dc-logo-bg.png'

export default function AppFooter() {

  return (
    <footer >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-2">
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
          <div className="col-12 col-md-6 col-lg-2">
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
          <div className="col-12 col-md-6 col-lg-2">
            <ul className="list-unstyled">
              <li>SITES</li>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>
          <div id="footer-logo" className="col-12 col-lg-6 position-relative">
            <img src={dcLogoBg} alt="" className="img-fluid position-absolute" />
          </div>
        </div>
      </div>
    </footer>
  )
}