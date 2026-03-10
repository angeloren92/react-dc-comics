import AppFooterList from './AppFooterList'

export default function AppFooter({ lists }) {

  return (
    <footer >
      <div className="container h-100">
        <section className="d-flex flex-column flex-wrap align-content-start h-100">
          {
            lists.map( (element, index) => (
              <AppFooterList
                key = {index}
                title = {element.title}
                list = {element.list}
              />
            ))
          }
        </section>
      </div>
    </footer>
  )
}