import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import FirstTen from "./components/FirstTen";
import TwentyYears from "./components/TwentyYears";
import ThirtyYears from "./components/ThirtyYears";
import FortyYears from "./components/FortyYears";

const Gallery = () => {
  return (
    <Box>
      <Helmet>
        <title> My Gallery | Oluseun Onigbinde @ 40</title>
      </Helmet>
      <AppBar
        position={"sticky"}
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          padding: "30px 0px",
        }}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      <Box bgcolor={"#fff"}>
        <Container>
          <FirstTen />
        </Container>
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <TwentyYears />
        </Container>
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <ThirtyYears />
        </Container>
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <FortyYears />
        </Container>
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <Footer />
        </Container>
      </Box>
    </Box>
  );
};

export default Gallery;
