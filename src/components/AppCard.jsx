export default function AppCard({thumb, title, series}) {

  return (
    <div className="col">
      <figure className="card rounded-0 border-0 h-100">
        <img className="img-fluid" src={thumb} alt={title} />
        <div className="card-body position-relative z-1 px-0">
          <p className="text-white">{series.toUpperCase()}</p>
        </div>
      </figure>
    </div>
  )
}
