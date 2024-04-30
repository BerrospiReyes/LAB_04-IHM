import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Basic from './layout/basic';
import Single from './Single';
const feather = require('feather-icons');
import Main from './main';
import Aside from './aside';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '/',
                element: <>
                    <div className="col-md-8">
                        <Main></Main>
                    </div>
                    <div className="col-md-4">
                        <Aside></Aside>
                    </div>
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
        ],
    },
]);


const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);