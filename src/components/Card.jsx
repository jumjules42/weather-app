import React from "react";
import { NavLink } from "react-router-dom";
import style from "../styles/Card.module.css";

function Card({ min, max, name, img, onClose, typeWeather, id }) {
  const weather = typeWeather.replaceAll(" ", "").toLowerCase();
  console.log(id);

  return (
    <div
      className={style.container}
      style={{
        backgroundImage: `url("/weatherPics/${weather}.jpeg")`,
      }}
    >
      <div className={style.buttonContainer}>
        <button onClick={onClose} className={style.buttonClose}>
          X
        </button>
      </div>

      <NavLink to={`/city/${id}`}>
        <h3>{name}</h3>
      </NavLink>

      <div className={style.tempContainer}>
        <div>
          <p>Min</p>
          <p>{min + "°"}</p>
        </div>
        <div>
          <p>Max</p>
          <p>{max + "°"}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      </div>
    </div>
  );
}

export default Card;
