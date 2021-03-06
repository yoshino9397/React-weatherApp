import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { getWeather } from "../fetchHelpers";
import styled from "styled-components";
import blue from "../assets/night.jpg";
import green from "../assets/day.jpg";
import orange from "../assets/sea.jpg";

const StyledWeather = styled.div`
  background-image: url(${(props) => {
    if (props.bgImage === "blue") {
      return blue;
    }
    if (props.bgImage === "green") {
      return green;
    }
    if (props.bgImage === "orange") {
      return orange;
    }
  }});
  background-size: cover;
  background-position: top center;
`;

const Weather = () => {
  const [inputLocation, setInputLocation] = useState("Canada");
  const [currentDate, setCurrentDate] = useState("");
  const [location, setLocation] = useState({
    city: "",
    state: "",
    country: "",
  });
  const [weather, setWeather] = useState({
    currentTemp: 0,
    weatherMain: "",
    tempMax: 0,
    tempMin: 0,
  });

  useEffect(() => {
    fetchData("Vancouver").then(([newWeather, placeName]) => {
      setWeather(newWeather);
      setLocation(placeName);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData(newLocation) {
    const now = new Date();
    setCurrentDate(dateBuilder(now));
    const response = await getWeather(newLocation);
    return response;
  }

  const setBackground = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour <= 7 || hour > 18) {
      return "blue";
    }
    if (hour > 7 && hour <= 15) {
      return "green";
    }
    return "orange";
  };

  const dateBuilder = (d) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const hour = d.getHours();
    const minutes = d.getMinutes();
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];

    return `${month}, ${date} ${day}  ${hour}:${minutes}  `;
  };

  const handleInputLocation = (e) => {
    e.preventDefault();
    setInputLocation(e.target.value);
  };

  const getForecast = (e) => {
    e.preventDefault();
    fetchData(inputLocation).then(([newWeather, placeName]) => {
      setWeather(newWeather);
      setLocation(placeName);
    });
  };

  return (
    <StyledWeather bgImage={setBackground()}>
      <Wrapper
        states={{ location, currentDate, weather }}
        handleInput={handleInputLocation}
        handleSubmit={getForecast}
      />
    </StyledWeather>
  );
};

export default Weather;
