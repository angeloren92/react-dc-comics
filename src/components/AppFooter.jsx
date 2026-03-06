import digitalComics from '/buy-comics-digital-comics.png'
import dcLogoBg from '/dc-logo-bg.png'

export default function AppFooter() {

  return (
    <footer className="text-white">
      <div className="top-footer bg-primary position-relative z-1">
        <div className="container">
          <figure className="d-flex py-2 m-0">
            <div className="d-flex align-items-center">
              <img src={digitalComics} alt="" className="img-fluid h-50" />
              <figcaption className="px-3">DIGITAL COMICS</figcaption>
            </div>
            <div className="d-flex align-items-center">
              <img src={digitalComics} alt="" className="img-fluid h-50" />
              <figcaption className="px-3">DC MERCHANDISE</figcaption>
            </div>
            <div className="d-flex align-items-center">
              <img src={digitalComics} alt="" className="img-fluid h-50" />
              <figcaption className="px-3">SUBSCRIPTION</figcaption>
            </div>
            <div className="d-flex align-items-center">
              <img src={digitalComics} alt="" className="img-fluid h-50" />
              <figcaption className="px-3">COMIC SHOP LOCATOR</figcaption>
            </div>
            <div className="d-flex align-items-center">
              <img src={digitalComics} alt="" className="img-fluid h-50" />
              <figcaption className="px-3">DC POWER VISA</figcaption>
            </div>
          </figure>
        </div>
      </div>
      <div className="main-footer bg-dark">
        <div className="container">
          <div className="row py-5">
            <div className="col-2">
              <ul className="list-unstyled">
                <li><strong className="h4">DC COMICS</strong></li>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>TV</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
              <ul className="list-unstyled">
                <li><strong className="h4">SHOP</strong></li>
                <li>Shop DC</li>
                <li>Shop DC Collectibles</li>
              </ul>
            </div>
            <div className="col-2">
              <ul className="list-unstyled">
                <li><strong className="h4">DC</strong></li>
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
            <div className="col-2">
              <ul className="list-unstyled">
                <li><strong className="h4">SITES</strong></li>
                <li>DC</li>
                <li>MAD Magazine</li>
                <li>DC Kids</li>
                <li>DC Universe</li>
                <li>DC Power Visa</li>
              </ul>
            </div>
            <div className="col-6 position-relative">
              <img id="logo" src={dcLogoBg} alt="" className="position-absolute" />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-footer bg-primary">
        <div className="container">

        </div>
      </div>
    </footer>
  )
}