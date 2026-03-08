import digitalComics from '/buy-comics-digital-comics.png'
import dcMerchandise from '/buy-comics-merchandise.png'
import subscription from '/buy-comics-subscriptions.png'
import comicShopLocator from '/buy-comics-shop-locator.png'
import dcPowerVisa from '/buy-dc-power-visa.svg'

export default function AppBannerMenu() {

  return (
    <section className="bg-primary text-white position-relative z-1">
      <div className="container">
        <figure className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 p-3 mb-0">
          <div className="col">
            <a href="#"><img src={digitalComics} alt="" className="img-fluid" />DIGITAL&nbsp;COMICS</a>
            </div>
          <div className="col">
            <a href="#"><img src={dcMerchandise} alt="" className="img-fluid" />DC&nbsp;MERCHANDISE</a>
            </div>
          <div className="col">
            <a href="#"><img src={subscription} alt="" className="img-fluid" />SUBSCRIPTION</a>
            </div>
          <div className="col">
            <a href="#"><img src={comicShopLocator} alt="" className="img-fluid" />COMIC&nbsp;SHOP&nbsp;LOCATOR</a>
            </div>
          <div className="col">
            <a href="#"><img src={dcPowerVisa} alt="" className="img-fluid" />DC&nbsp;POWER&nbsp;VISA</a>
            </div>
        </figure>
      </div>
    </section>
  )
}