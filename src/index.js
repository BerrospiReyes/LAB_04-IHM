import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Basic from './basic';
import Single from './Single';
const feather = require('feather-icons');

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

setTimeout(() =>{
    feather.replace();
},1000);


const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
    },
    {
        path: "detalle",
        element: <Single />,
    },
]);


const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);