const Main = () => {
    return <main>
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://serviciotecnicodecomputadoras.com/wp-content/uploads/2023/05/SERVICIO-TECNICO-PORTADA.png" class="d-block w-100" alt="img0"/>
    </div>
    <div class="carousel-item">
      <img src="https://kunaq.com.pe/wp-content/uploads/Soporte-tecnico-img-02.jpg" class="d-block w-100" alt="img1"/>
    </div>
    <div class="carousel-item">
      <img src="https://sisconpc.ec/wp-content/uploads/2020/09/tecnicopc.jpg" class="d-block w-100" alt="img2"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </main>;
}

export default Main;