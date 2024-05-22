import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';

const Header = () => {
    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <header className="color-primario">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">
                        <i data-feather="monitor"></i> PC BUILDING
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active text-white" aria-current="page" to="/">
                                <i data-feather="home"></i> Inicio
                            </Link>
                            <Link className="nav-link text-white" to="/novedades">
                                <i data-feather="star"></i> Novedades
                            </Link>
                            <Link className="nav-link text-white" to="/extras">
                                <i data-feather="plus-circle"></i> Extras
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;