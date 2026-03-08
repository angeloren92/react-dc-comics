import digitalComics from '/buy-comics-digital-comics.png'
import dcMerchandise from '/buy-comics-merchandise.png'
import subscription from '/buy-comics-subscriptions.png'
import comicShopLocator from '/buy-comics-shop-locator.png'
import dcPowerVisa from '/buy-dc-power-visa.svg'

export default function AppBannerMenu(){

  return (
    <div className="top-footer bg-primary position-relative z-1">
      <div className="container">
        <figure className="d-flex justify-content-evenly align-items-center mb-0 py-3">
          <ul className="">
            <a><img src={digitalComics} alt="" className="img-fluid" />DIGITAL&nbsp;COMICS</a>
            <a><img src={dcMerchandise} alt="" className="img-fluid" />DC&nbsp;MERCHANDISE</a>
            <a><img src={subscription} alt="" className="img-fluid" />SUBSCRIPTION</a>
            <a><img src={comicShopLocator} alt="" className="img-fluid" />COMIC&nbsp;SHOP&nbsp;LOCATOR</a>
            <a><img src={dcPowerVisa} alt="" className="img-fluid" />DC&nbsp;POWER&nbsp;VISA</a>
          </ul>
        </figure>
      </div>
    </div>
  )
}