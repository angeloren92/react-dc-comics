import AppCard from './AppCard';

export default function AppMain({cards}) {
  
  return (
    <main className="bg-dark">
      <div id="jumbotron"></div>
      <div className="container position-relative">
        <span className="label position fw-bold position-absolute translate-middle-y">CURRENT SERIES</span>
        <section className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-6 py-5">
          {cards.map((element) => (
            <AppCard
              key={element.id}
              thumb={element.thumb}
              title={element.title}
              series={element.series}
            />
          )
          )}
          <div className="col-12 m-auto">
            <button type="button" className="btn btn-primary w-100 rounded-0">LOAD MORE</button>
          </div>
        </section>
      </div>
    </main>
  )
}