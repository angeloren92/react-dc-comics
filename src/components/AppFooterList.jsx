export default function AppFooterList({ title, list }) {

  return (
    <figure>
      <p className="mb-2">{title}</p>
      <ul className="list-unstyled">
        {
          list.map((element, index) => (
            <li key={index}><a href="#">{element}</a></li>
          ))
        }
      </ul>
    </figure>
  )
}