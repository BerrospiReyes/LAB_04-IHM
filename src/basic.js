import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import Aside from "./aside";

const Basic = () => {
    return (
        <>
             <StrictMode>
        <Header></Header>
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>ESTO ES BASIC</h1>
                    <Main></Main>
                </div>
                <div className="col-md-4">
                    <Aside></Aside>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </StrictMode>
        </>
    );
}

export default Basic;