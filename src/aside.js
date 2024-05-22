const Aside = () => {
    return (
        <aside>
            <div className="container">
                <div className="row">
                    <div className=" d-flex flex-column align-items-center justify-content-center p-3">
                        <h1 className="text-light">Registro</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="usuario" className="text-light">Nombre de usuario:</label>
                                <input type="text" id="usuario" />
                            </div>
                            <div>
                                <br />
                                <label htmlFor="direccion" className="text-light">Dirección:</label>
                                <input type="text" id="direccion" />
                            </div>
                            <div>
                                <br />
                                <label htmlFor="email" className="text-light">E-mail</label>
                                <input type="text" id="email" />
                            </div>
                            <div>
                                <br />
                                <label htmlFor="numero" className="text-light">Ingrese edad</label>
                                <input type="number" id="numero" />
                            </div>
                            <div>
                                <br />
                                <label htmlFor="contraseña" className="text-light">Contraseña</label>
                                <input type="password" id="contraseña" />
                            </div>
                            <br />
                            <button type="submit" className="btn btn-dark" tabIndex="5">
                            <i data-feather="send"></i>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </aside>
    );
  }
  
  export default Aside;