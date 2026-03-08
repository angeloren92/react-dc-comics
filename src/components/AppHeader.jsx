import dcLogo from '/dc-logo.png';

export default function AppHeader() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-0">
                <div className="container align-items-stretch justify-content-between">
                    <a className="navbar-brand py-4" href="#"><img src={dcLogo} alt="" /></a>
                    <div className="d-flex align-items-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center fw-bold h-100">
                            <li className="nav-item">
                                <a className="nav-link" href="#">CHARACTERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">COMICS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MOVIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GAMES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">COLLECTIBLES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">VIDEOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FANS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SHOP</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}