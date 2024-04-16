const Aside = () => {
  return (
      <aside>
          <div className="container">
              <div className="row">
                  <div className="col-md-12 bg-info d-flex flex-column align-items-center justify-content-center p-3">
                      <h1>📒Registro📒</h1>
                      <form>
                          <div className="form-group">
                              <label htmlFor="usuario">Nombre de usuario:</label>
                              <input type="text" id="usuario" />
                          </div>
                          <div>
                              <br />
                              <label htmlFor="direccion">Dirección:</label>
                              <input type="text" id="direccion" />
                          </div>
                          <div>
                              <br />
                              <label htmlFor="email">E-mail</label>
                              <input type="text" id="email" />
                          </div>
                          <div>
                              <br />
                              <label htmlFor="numero">Ingrese edad</label>
                              <input type="number" id="numero" />
                          </div>
                          <div>
                              <br />
                              <label htmlFor="contraseña">Contraseña</label>
                              <input type="password" id="contraseña" />
                          </div>
                          <br />
                          <button type="submit" className="btn btn-dark" tabIndex="5">Enviar</button>
                      </form>
                  </div>
              </div>
          </div>
      </aside>
  );
}

export default Aside;
