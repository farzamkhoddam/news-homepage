import React from "react";
import styled from "styled-components/macro";
import "./App.css";
import Hero from "./Hero";
import SmartMenu from "./Menu";
import NewsItems from "./NewsItems";

function App() {
  return (
    <Container className="App">
      <SmartMenu />
      <Hero />
      <NewsItems />
    </Container>
  );
}

export default App;
const Container = styled.main`
  max-width: 1138px;
  padding-bottom: 5rem;
  align-self: center;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;
