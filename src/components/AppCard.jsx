export default function AppCard(props) {

  return (
    <div className="col">
      <div className="card rounded-0 border-0">
        <img className="img-fluid" src={props.thumb} alt={props.title} />
      </div>
      <p className="py-2 py-md-3 py-lg-4">{props.series.toUpperCase()}</p>
    </div>
  )
}
