export default function AppCard({thumb, title, series}) {

  return (
    <div className="col">
      <div className="card rounded-0 border-0">
        <img className="img-fluid" src={thumb} alt={title} />
      </div>
      <p className="py-2 py-md-3 py-lg-4">{series.toUpperCase()}</p>
    </div>
  )
}
