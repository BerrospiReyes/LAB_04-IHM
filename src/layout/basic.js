import React, { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Basic = () => {
    return (
        <>
            <StrictMode>
                <Header />
                <div className="container-fluid d-flex justify-content-center color-terciario">
                    <div className="row py-5">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </StrictMode>
        </>
    );
}

export default Basic;