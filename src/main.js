const Main = () => {
    const imgStyle = {
        margin: '0 auto',
        maxHeight: '300px'
    };

    return (
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 bg-primary d-flex justify-content-center p-2">
                        <h1>👨‍🔧Servicio Técnico👨‍🔧</h1>
                    </div>
                </div>
            </div>

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://serviciotecnicodecomputadoras.com/wp-content/uploads/2023/05/SERVICIO-TECNICO-PORTADA.png" className="d-block w-100" style={imgStyle} alt="img0" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://kunaq.com.pe/wp-content/uploads/Soporte-tecnico-img-02.jpg" className="d-block w-100" style={imgStyle} alt="img1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://sisconpc.ec/wp-content/uploads/2020/09/tecnicopc.jpg" className="d-block w-100" style={imgStyle} alt="img2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Descripción general */}
            <div className="text-center">
                <p>Es nuestra dedicación a brindar asistencia y soporte especializado para garantizar que tu producto o dispositivo funcione de manera óptima. Nuestro equipo de expertos está comprometido a resolver tus problemas técnicos, proporcionar orientación sobre el uso adecuado y ofrecer soluciones efectivas para que puedas disfrutar al máximo de tu producto.</p>
            </div>
        </main>
    );
}

export default Main;