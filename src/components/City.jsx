import React from "react";
import { Redirect } from "react-router-dom";
import styles from "../styles/City.module.css";

function City({ info }) {
  console.log(info);
  if (info) {
    return (
      <div className="ciudad">
        <div className="container">
          <h2>{info.name}</h2>
          <div className="info">
            <div>Temperatura: {info.temp} ºC</div>
            <div>Clima: {info.weather}</div>
            <div>Viento: {info.wind} km/h</div>
            <div>Cantidad de nubes: {info.clouds}</div>
            <div>Latitud: {info.latitud}º</div>
            <div>Longitud: {info.longitud}º</div>
          </div>
        </div>
      </div>
    );
  } else {
    alert(`Redirigido al HOME.`);
    return <Redirect to="/" />;
  }
}

export default City;
