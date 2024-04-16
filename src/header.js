const Header = () => {
    return <header>
<nav className="navbar navbar-expand-lg bg-body-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">PC BUILDING</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        <a className="nav-link" href="#">Novedades</a>
        <a className="nav-link" href="#">Extras</a>
      </div>
    </div>
  </div>
</nav>
    </header>;
}

export default Header;