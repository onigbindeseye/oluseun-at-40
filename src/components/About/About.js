import React from "react";
import { Helmet } from "react-helmet-async";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import Header from "../../components/Header";
import AppBar from "@mui/material/AppBar";
import Footer from "../../components/Footer";
import Profile from "./components/Profile";
import ProfilePage2 from "./components/ProfilePage2";
import ProfilePage3 from "./components/ProfilePage3";

const About = () => {
  return (
    <Box>
      <Helmet>
        <title> Profile | Oluseun Onigbinde @ 40</title>
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
      <Box>
        <Container>
          <Profile />
        </Container>
      </Box>
      <Box>
        <Container>
          <ProfilePage2 />
        </Container>
      </Box>
      <Box>
        <Container>
          <ProfilePage3 />
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

export default About;
