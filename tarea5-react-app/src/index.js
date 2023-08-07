import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PeliAzar from "./PeliAzar";
import Poster from "./Poster";
import Trailer from "./Trailer";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PeliAzar />
    <Poster titulo="nombre_pelicula"></Poster>
    <Trailer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
