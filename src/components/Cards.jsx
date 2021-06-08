import React from "react";
import Card from "./Card";
import styles from "../styles/Cards.module.css";

function Cards({ cities, onClose }) {
  if (cities) {
    return (
      <div className={styles.cardsContainer}>
        {cities.map((city, index) => (
          <Card
            id={city.id}
            max={city.max}
            min={city.min}
            name={city.name}
            img={city.img}
            onClose={() => onClose(city.id)}
            typeWeather={city.typeWeather}
            key={index}
          />
        ))}
      </div>
    );
  } else {
    return <div>Sin Ciudades</div>;
  }
}

export default Cards;
