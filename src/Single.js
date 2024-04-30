import Servicio from './data/servicio.json'
import "./style.css"
const Single = () => {

    const currentRoute = window.location.pathname;
    const servicio = Servicio.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{servicio.name}</h1>
        <hr></hr>
        <img className="img-fluid w-25" src={servicio.picture}></img>
        <p>{servicio.description}</p>
    </>);
}

export default Single;