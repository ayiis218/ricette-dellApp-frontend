import React from "react";
import styled from 'styled-components';

import NavBar from '../atoms/Navbar/index'
// import NavBar from '../atoms/NavBar'
import Slider from '../molecules/Landing/Slider'
import Popular from '../molecules/Landing/Popular'
import Latest from "../molecules/Landing/Latest"
import ListPopular from '../molecules/Landing/ListPopular'
import Footer from '../Footer'

const RightBar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 740px;
  width: 350px;
  background-color: var(--secondary-color);
  z-index: -1;

  @media screen and (max-width: 991px) {
    width: 250px;
  }

  @media screen and (max-width: 767px) {
    width: 150px;
  }

  @media screen and (max-width: 450px) {
    width: 50px;
  }
`;

function FormLanding() {
  return (
    <>
      <NavBar />
      <RightBar />
      <Slider />
      <Popular />
      <Latest  />
      <ListPopular />
      <Footer />
    </>
  );
}

export default FormLanding;