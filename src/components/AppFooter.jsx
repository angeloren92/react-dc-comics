import AppFooterList from './AppFooterList'

export default function AppFooter({ lists }) {

  return (
    <footer >
      <div className="container h-100">
        <section className="d-flex flex-column flex-wrap h-100 align-content-start">
          {
            lists.map(element => (
              <AppFooterList
                title={element.title}
                list={element.list}
              />
            ))
          }
        </section>
      </div>
    </footer>
  )
}