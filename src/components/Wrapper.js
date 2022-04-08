import React from "react";

import Search from "./Search";
import Location from "./Location";
import WeatherDisplay from "./WeatherDisplay";

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, rgba( 0, 0, 0, 0.2), rgba(0, 0, 0, 0.6));
`
const Wrapper = ({ handleInput, handleSubmit, states }) => (
  <StyledWrapper>
    <Search handleInput={handleInput} handleSubmit={handleSubmit} />
    <Location location={states.location} currentDate={states.currentDate} />
    <WeatherDisplay weather={states.weather} />
  </StyledWrapper>
);

export default Wrapper;
