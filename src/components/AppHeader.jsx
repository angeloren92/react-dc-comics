import dcLogo from '/dc-logo.png';

export default function AppHeader() {

    const navLinks = [
        { id: 1, name: 'characters', url: '#', state: false },
        { id: 2, name: 'comics', url: '#', state: true },
        { id: 3, name: 'movies', url: '#', state: false },
        { id: 4, name: 'tv', url: '#', state: false },
        { id: 5, name: 'games', url: '#', state: false },
        { id: 6, name: 'collectribes', url: '#', state: false },
        { id: 7, name: 'videos', url: '#', state: false },
        { id: 8, name: 'fans', url: '#', state: false },
        { id: 9, name: 'news', url: '#', state: false },
        { id: 10, name: 'shop', url: '#', state: false }
    ];

    const markup = (arr) => {
        return arr.map(({ id, name, url, state }) => (
            <li className="nav-item" key={id}>
                <a className={`nav-link ${state === true ? 'isActive' : ''}`} href={url}>{name.toUpperCase()}</a>
            </li>
        ))
    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div className="container align-items-stretch justify-content-between">
                    <a className="navbar-brand py-4" href="#"><img src={dcLogo} alt="logo dc" /></a>
                    <div className="d-flex align-items-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center fw-bold h-100">
                            {markup(navLinks)}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}