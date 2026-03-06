import digitalComics from '/buy-comics-digital-comics.png'

export default function AppFooter() {

  return (
    <footer>
      <div className="top-footer bg-primary">
        <div className="container text-white">
          <figure className="d-flex py-2">
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

      
    </footer>
  )
}