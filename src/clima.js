import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRandomCity } from "./utils";

/*API_KEY = a poner tu key de la api obvi xd*/
const API_KEY = "810f9c0943e369ffcddc1e80e0c44050";
const IMAGE_PATH = "/img/clima2.png";

const Clima = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const cities = [];
      for (let i = 0; i < 5; i++) {
        const city = getRandomCity();
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        cities.push({ ...response.data });
      }
      setWeatherData(cities);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (!weatherData) {
    return <p>No se pudo cargar el clima</p>;
  }
  return (
    <div
      style={{
        height: 500,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 45,
        }}
      >
        {weatherData.map((data, index) => {
          const temperature = Math.round(data.main.temp - 273.15);
          const isThird = index === 0;
          const style = isThird
            ? {
                textAlign: "center",
                width: 180,
                backgroundColor: "gray",

                height: 210,
                marginTop: 150,
                borderRadius: 25,
              }
            : {
                textAlign: "center",
                width: 180,
                backgroundColor: "gray",
                height: 210,
                marginTop: 150,
                borderRadius: 25,
              };
          return (
            <div
              key={index}
              className={isThird ? "third-item" : "non-third-item"}
              style={style}
            >
              <img
                src={IMAGE_PATH}
                alt="IKK"
                style={{
                  width: isThird ? 80 : 84,
                  height: isThird ? 80 : 74,
                  marginBottom: isThird ? 5 : 5,
                }}
              />
              <h2 style={{ fontSize: isThird ? 18 : 18, marginBottom: 5 }}>
                {data.name}
              </h2>
              <p style={{ fontSize: isThird ? 10 : 10, marginBottom: 8 }}>
                {data.weather[0].description}
              </p>
              <p style={{ fontSize: isThird ? 20 : 20 }}>{temperature}°C</p>
            </div>
          );
        })}
      </div>
      <style>
        {`
          .third-item {
            height: 450Px; /* Altura para third-item */
           
          }
  
          .third-item:hover {
            background-color: lightblue;
          }
  
          .non-third-item {
            height: 350px; /* Altura para non-third-item */

         
          }
        `}
      </style>
    </div>
  );
};

export default Clima;
