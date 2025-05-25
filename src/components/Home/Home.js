import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Banner from "./components/Banner";
import OluseunTimeline from "./components/OluseunTimeline";
import Wishes from "../RSVP/components/Wishes";

const Home = () => {
  return (
    <Box>
      <Helmet>
        <title> Homepage | Oluseun Onigbinde @ 40</title>
      </Helmet>

      <AppBar
        position={"sticky"}
        elevation={0}
        sx={{
          backgroundColor: "#fff",
          padding: "20px 0px",
        }}
      >
        <Container paddingY={{ xs: 1 / 2, sm: 1 / 2 }}>
          <Header />
        </Container>
      </AppBar>
      <Box display={{ xs: "none", sm: "block" }}>
        <Banner />
      </Box>
      <Box display={{ xs: "block", sm: "none" }}>
        <Banner />
      </Box>
      <Box>
        <Container>
          <OluseunTimeline />
        </Container>
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <Wishes />
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

export default Home;
