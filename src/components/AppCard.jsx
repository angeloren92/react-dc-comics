export default function AppCard({ thumb, title, series }) {

  return (
    <div className="col">
      <figure className="card rounded-0 border-0 h-100">
        <a className="" href="#">
          <img className="img-fluid" src={thumb} alt={title} />
        </a>
        <div className="card-body h-50 position-relative px-0">
          <a href="#">
            <p className="text-white">{series.toUpperCase()}</p>
          </a>
        </div>
      </figure>
    </div>
  )
}
