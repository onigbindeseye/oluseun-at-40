import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Details from "./components/Details";
import RsvpForm from "./components/RsvpForm";
import Wishes from "./components/Wishes";

const RSVP = () => {
  return (
    <Box>
      <Helmet>
        <title> Birthday RSVP | Oluseun Onigbinde @ 40</title>
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
        <Details />
      </Box>
      <Box bgcolor={"#fff"}>
        <Container>
          <RsvpForm />
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

export default RSVP;
