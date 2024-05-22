import React, { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Servicio from './data/servicio.json';
const feather = require('feather-icons');

const Main = () => {
    const navigate = useNavigate();

    useEffect(() => {
        feather.replace();
    }, []);

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return (
        <main>
            <Carousel>
                {Servicio.map(it => (
                    <Carousel.Item key={it.slug} onClick={(e) => {
                        e.preventDefault();
                        handleClick(it.slug);
                    }}>
                        <img className='imagen-carrusel' src={it.picture} alt={it.name} style={{ width: "100%", height: "100", objectFit: "cover" }} />
                        <Carousel.Caption>
                            <h3>{it.name}</h3>
                            <p>{it.description}</p>
                            <button className="btn btn-primary">Ver detalle</button>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </main>
    );
}

export default Main;